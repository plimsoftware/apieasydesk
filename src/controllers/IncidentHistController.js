import IncidentHist from '../models/IncidentHist';

class IncidentHistController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;

      const newHistory = await IncidentHist.create(req.body);

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
      const incidenthist = await IncidentHist.findAll({
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
      const incidenthist = await IncidentHist.findAll({
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

export default new IncidentHistController();
