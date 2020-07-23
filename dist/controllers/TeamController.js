"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Team = require('../models/Team'); var _Team2 = _interopRequireDefault(_Team);
var _Teammember = require('../models/Teammember'); var _Teammember2 = _interopRequireDefault(_Teammember);

class TeamController {
  // Store
  async store(req, res) {
    const { name } = req.body;
    try {
      const findTeam = await _Team2.default.findOne({
        where: {
          name,
        },
      });

      if (findTeam) {
        return res.status(400).json({
          errors: ['Team already exist.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newTeam = await _Team2.default.create(myBody);

      return res.json(newTeam);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const teams = await _Team2.default.findAll({
        order: [['name', 'ASC']],
        include: {
          model: _Teammember2.default,
        },
      });
      return res.json(teams);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const team = await _Team2.default.findOne({
        where: { id: req.params.id },
        include: {
          model: _Teammember2.default,
        },
      });

      return res.json(team);
    } catch (e) {
      return res.status(400).json({
        errors: ['Team does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const findTeam = await _Team2.default.findByPk(req.params.id);

      if (!findTeam) {
        return res.status(400).json({
          errors: ['Team does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await findTeam.update(myBody);

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
      const team = await _Team2.default.findByPk(req.params.id);

      if (!team) {
        return res.status(400).json({
          errors: ['Team does not exist.'],
        });
      }

      await team.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new TeamController();
