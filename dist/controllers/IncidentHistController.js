"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _IncidentHist = require('../models/IncidentHist'); var _IncidentHist2 = _interopRequireDefault(_IncidentHist);

class IncidentHistController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;

      const newHistory = await _IncidentHist2.default.create(req.body);

      return res.json(newHistory);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const incidenthist = await _IncidentHist2.default.findAll({
        order: [['created_at', 'ASC']],
      });
      return res.json(incidenthist);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const incidenthist = await _IncidentHist2.default.findAll({
        where: { incid: req.params.id },
        order: [['created_at', 'ASC']],
      });

      return res.json(incidenthist);
    } catch (e) {
      return res.status(400).json({
        errors: ['Incident History does not exist.'],
      });
    }
  }
}

exports. default = new IncidentHistController();
