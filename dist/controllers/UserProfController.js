"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Profile = require('../models/Profile'); var _Profile2 = _interopRequireDefault(_Profile);
var _UserProf = require('../models/UserProf'); var _UserProf2 = _interopRequireDefault(_UserProf);

class UserProfController {
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

      const findUser = await _User2.default.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!findUser) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const novUserProf = await _UserProf2.default.create({
        username: req.body.username,
        profile: req.body.profile,
        userid: req.body.userid,
      });

      return res.json(novUserProf);
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
      const userprof = await _UserProf2.default.findByPk(req.params.id);

      return res.json(userprof);
    } catch (e) {
      return res.status(400).json({
        errors: ['User profile does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const userprof = await _UserProf2.default.findByPk(req.params.id);

      if (!userprof) {
        return res.status(400).json({
          errors: ['User profile does not exist.'],
        });
      }

      const newData = await userprof.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const userprof = await _UserProf2.default.findByPk(req.params.id);

      if (!userprof) {
        return res.status(400).json({
          errors: ['User profile does not exist.'],
        });
      }

      await userprof.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new UserProfController();
