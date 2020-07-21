import Company from '../models/Company';

class CompanyController {
  // Store
  async store(req, res) {
    const { name } = req.body;
    try {
      const findCompany = await Company.findOne({
        where: {
          name,
        },
      });

      if (findCompany) {
        return res.status(400).json({
          errors: ['Company already exist.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newCompany = await Company.create(myBody);

      return res.json(newCompany);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const companies = await Company.findAll();
      return res.json(companies);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const company = await Company.findOne({
        where: { id: req.params.id },
      });

      return res.json(company);
    } catch (e) {
      return res.status(400).json({
        errors: ['Company does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const findCompany = await Company.findByPk(req.params.id);

      if (!findCompany) {
        return res.status(400).json({
          errors: ['Company does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await findCompany.update(myBody);

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
      const company = await Company.findByPk(req.params.id);

      if (!company) {
        return res.status(400).json({
          errors: ['Company does not exist.'],
        });
      }

      await company.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new CompanyController();
