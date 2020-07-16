"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _UserProf = require('../models/UserProf'); var _UserProf2 = _interopRequireDefault(_UserProf);
var _Profile = require('../models/Profile'); var _Profile2 = _interopRequireDefault(_Profile);

class UserController {
  // Store
  async store(req, res) {
    try {
      const myprofile = await _Profile2.default.findOne({
        where: {
          name: req.body.profile,
        },
      });

      if (!myprofile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      const novoUser = await _User2.default.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
      });

      const novUserProf = await _UserProf2.default.create({
        username: req.body.username,
        profile: req.body.profile,
        userid: novoUser.id,
      });
      const {
        id, username, name,
      } = novoUser;
      const {
        profile,
      } = novUserProf;
      return res.json({
        id, username, name, profile,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'username', 'name'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const {
        id, name, username,
      } = user;
      return res.json({
        id, name, username,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['User does not exist.'],
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
          errors: ['User does not exist.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new UserController();