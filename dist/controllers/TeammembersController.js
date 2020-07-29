"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Team = require('../models/Team'); var _Team2 = _interopRequireDefault(_Team);
var _Teammember = require('../models/Teammember'); var _Teammember2 = _interopRequireDefault(_Teammember);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TeammemberController {
  // Store
  async store(req, res) {
    const { userid, teamid } = req.body;
    try {
      const findUser = await _User2.default.findByPk(userid);

      if (!findUser) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const findTeam = await _Team2.default.findByPk(teamid);

      if (!findTeam) {
        return res.status(400).json({
          errors: ['Team does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newTeammember = await _Teammember2.default.create(myBody);

      return res.json(newTeammember);
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
        const teammember = await _Teammember2.default.findAll({
          include: {
            attributes: ['name', 'username'],
            model: _User2.default,
          },
        });
        return res.json(teammember);
      }

      const teammember = await _Teammember2.default.findAll({
        include: {
          attributes: ['name', 'username'],
          where: {
            active: true,
          },
          model: _User2.default,
        },
      });
      return res.json(teammember);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const teammember = await _Teammember2.default.findByPk(req.params.id, {
        include: {
          attributes: ['name', 'username'],
          model: _User2.default,
        },
      });

      return res.json(teammember);
    } catch (e) {
      return res.status(400).json({
        errors: ['Team member does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const findTeammember = await _Teammember2.default.findByPk(req.params.id);

      if (!findTeammember) {
        return res.status(400).json({
          errors: ['Team member does not exist.'],
        });
      }

      const { userid, teamid } = req.body;

      if (userid) {
        const findUser = await _User2.default.findByPk(userid);

        if (!findUser) {
          return res.status(400).json({
            errors: ['User does not exist.'],
          });
        }
      }

      if (teamid) {
        const findTeam = await _Team2.default.findByPk(teamid);

        if (!findTeam) {
          return res.status(400).json({
            errors: ['Team does not exist.'],
          });
        }
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await findTeammember.update(myBody);

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
      const teammember = await _Teammember2.default.findByPk(req.params.id);

      if (!teammember) {
        return res.status(400).json({
          errors: ['Team member does not exist.'],
        });
      }

      await teammember.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new TeammemberController();
