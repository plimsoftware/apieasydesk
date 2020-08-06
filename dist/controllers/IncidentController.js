"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Incident = require('../models/Incident'); var _Incident2 = _interopRequireDefault(_Incident);
var _IncidentHist = require('../models/IncidentHist'); var _IncidentHist2 = _interopRequireDefault(_IncidentHist);

class IncidentController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newIncident = await _Incident2.default.create(myBody);
      await _IncidentHist2.default.create({
        incid: newIncident.id,
        description: 'Creation of incident.',
        createdby: req.userUser,
      });

      return res.json(newIncident);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const incidents = await _Incident2.default.findAll();
      return res.json(incidents);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const incident = await _Incident2.default.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: _IncidentHist2.default,
          },
        ],
      });

      return res.json(incident);
    } catch (e) {
      return res.status(400).json({
        errors: ['Incident does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const findIncident = await _Incident2.default.findByPk(req.params.id);

      if (!findIncident) {
        return res.status(400).json({
          errors: ['Incident does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await findIncident.update(myBody);

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
      const incident = await _Incident2.default.findByPk(req.params.id);

      if (!incident) {
        return res.status(400).json({
          errors: ['Incident does not exist.'],
        });
      }

      await incident.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new IncidentController();
