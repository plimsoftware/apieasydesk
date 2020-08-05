"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);

class CategoryController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newCategory = await _Category2.default.create(myBody);

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
      const { full, type } = req.query;

      if (full) {
        const categories = await _Category2.default.findAll({
          order: [['description', 'ASC']],
          where: {
            parent: 0,
          },
        });
        return res.json(categories);
      }

      if (type) {
        const categories = await _Category2.default.findAll({
          order: [['description', 'ASC']],
          where: {
            parent: 0,
            type,
          },
        });
        return res.json(categories);
      }

      const categories = await _Category2.default.findAll({
        order: [['description', 'ASC']],
        where: {
          active: true,
          parent: 0,
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
      const category = await _Category2.default.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: _Category2.default,
            include: [
              {
                model: _Category2.default,
              }],
          },
        ],
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
      const findCategory = await _Category2.default.findByPk(req.params.id);

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
      const category = await _Category2.default.findByPk(req.params.id);

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

exports. default = new CategoryController();
