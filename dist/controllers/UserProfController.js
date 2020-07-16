"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _UserProf = require('../models/UserProf'); var _UserProf2 = _interopRequireDefault(_UserProf);

class UserProfController {
  // Store
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
      });

      const novUserProf = await _UserProf2.default.create({
        username: req.body.username,
        profile: req.body.profile,
      });
      const {
        user, name,
      } = novoUser;
      const {
        profile,
      } = novUserProf;
      return res.json({ user, name, profile });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const userprof = await _UserProf2.default.findAll();
      return res.json(userprof);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const {
        id, nome, email, admin,
      } = user;
      return res.json({
        id, nome, email, admin,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['User não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User não existe.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new UserProfController();
