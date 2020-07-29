import Category from '../models/Category';

class CategoryController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newCategory = await Category.create(myBody);

      return res.json(newCategory);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const { full } = req.query;

      if (full) {
        const categories = await Category.findAll({
          order: [['description', 'ASC']],
        });
        return res.json(categories);
      }

      const categories = await Category.findAll({
        order: [['description', 'ASC']],
        where: {
          active: true,
        },
      });
      return res.json(categories);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const category = await Category.findOne({
        where: { id: req.params.id },
      });

      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        errors: ['Category does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const findCategory = await Category.findByPk(req.params.id);

      if (!findCategory) {
        return res.status(400).json({
          errors: ['Category does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await findCategory.update(myBody);

      return res.json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(400).json({
          errors: ['Category does not exist.'],
        });
      }

      await category.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new CategoryController();
