"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Client = require('../models/Client'); var _Client2 = _interopRequireDefault(_Client);
var _Company = require('../models/Company'); var _Company2 = _interopRequireDefault(_Company);
var _Team = require('../models/Team'); var _Team2 = _interopRequireDefault(_Team);


class ClientController {
  // Store
  async store(req, res) {
    try {
      const myCompany = await _Company2.default.findOne({
        where: {
          id: req.body.companyid,
        },
      });

      if (!myCompany) {
        return res.status(400).json({
          errors: ['Company does not exist.'],
        });
      }

      const myTeam = await _Team2.default.findOne({
        where: { name: req.body.defaultlocalsupport },
      });

      if (!myTeam) {
        return res.status(400).json({
          errors: ['Local Support Team does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newClient = await _Client2.default.create(myBody);

      return res.json(newClient);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  }

  // Index
  async index(req, res) {
    try {
      const { companyid } = req.query;

      if (companyid) {
        const team = await _Client2.default.findAll({
          where: { companyid },
          include: {
            model: _Company2.default,
            attributes: ['name'],
          },
        });

        return res.json(team);
      }

      const clients = await _Client2.default.findAll({
        include: {
          model: _Company2.default,
          attributes: ['name'],
        },
      });
      return res.json(clients);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const client = await _Client2.default.findByPk(req.params.id, {
        include: {
          model: _Company2.default,
          attributes: ['name'],
        },
      });

      return res.json(client);
    } catch (e) {
      return res.status(400).json({
        errors: ['Client does not exists.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      if (req.body.companyid) {
        const myCompany = await _Company2.default.findOne({
          where: {
            id: req.body.companyid,
          },
        });

        if (!myCompany) {
          return res.status(400).json({
            errors: ['Company does not exist.'],
          });
        }
      }

      if (req.body.defaultlocalsupport) {
        const myTeam = await _Team2.default.findOne({
          where: { name: req.body.defaultlocalsupport },
        });

        if (!myTeam) {
          return res.status(400).json({
            errors: ['Local Support Team does not exist.'],
          });
        }
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const client = await _Client2.default.findByPk(req.params.id);

      if (!client) {
        return res.status(400).json({
          errors: ['Client does not exists.'],
        });
      }

      const newData = await client.update(req.body);

      return res.json(newData);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const client = await _Client2.default.findByPk(req.params.id);

      if (!client) {
        return res.status(400).json({
          errors: ['Client does not exists.'],
        });
      }

      await client.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}


exports. default = new ClientController();
