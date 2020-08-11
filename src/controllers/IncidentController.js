import Incident from '../models/Incident';
import IncidentHist from '../models/IncidentHist';

class IncidentController {
  // Store
  async store(req, res) {
    try {
      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newIncident = await Incident.create(myBody);
      await IncidentHist.create({
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
      const { assignedteam, assigneduser } = req.query;
      if (assignedteam) {
        const team = await Incident.findAll({
          where: { assignedteam },
          include: [
            {
              model: IncidentHist,
            },
          ],
        });

        return res.json(team);
      }

      if (assigneduser) {
        console.log(assigneduser);
        const team = await Incident.findAll({
          where: { assigneduser },
          include: [
            {
              model: IncidentHist,
            },
          ],
        });

        return res.json(team);
      }
      console.log('cheguei aqui');

      const incidents = await Incident.findAll();
      return res.json(incidents);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const incident = await Incident.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: IncidentHist,
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
      const findIncident = await Incident.findByPk(req.params.id);

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
      const incident = await Incident.findByPk(req.params.id);

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

export default new IncidentController();
