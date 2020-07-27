"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Profile = require('../models/Profile'); var _Profile2 = _interopRequireDefault(_Profile);

class ProfileController {
  // Store
  async store(req, res) {
    try {
      const myProfile = await _Profile2.default.findOne({
        where: {
          name: req.body.name,
        },
      });

      if (myProfile) {
        return res.status(400).json({
          errors: ['Company already exists.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newProfile = await _Profile2.default.create(req.body);

      return res.json(newProfile);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const profile = await _Profile2.default.findAll({ order: [['name', 'ASC']] });
      return res.json(profile);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const profile = await _Profile2.default.findByPk(req.params.id);

      return res.json(profile);
    } catch (e) {
      return res.status(400).json({
        errors: ['Profile does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const profile = await _Profile2.default.findByPk(req.params.id);

      if (!profile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      const newData = await profile.update(req.body);

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
      const profile = await _Profile2.default.findByPk(req.params.id);

      if (!profile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      await profile.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new ProfileController();
