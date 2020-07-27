import Client from '../models/Client';
import Company from '../models/Company';
import Team from '../models/Team';


class ClientController {
  // Store
  async store(req, res) {
    try {
      const myCompany = await Company.findOne({
        where: {
          id: req.body.companyid,
        },
      });

      if (!myCompany) {
        return res.status(400).json({
          errors: ['Company does not exist.'],
        });
      }

      const myTeam = await Team.findOne({
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

      const newClient = await Client.create(myBody);

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
        const team = await Client.findAll({
          where: { companyid },
          include: {
            model: Company,
            attributes: ['name'],
          },
        });

        return res.json(team);
      }

      const clients = await Client.findAll({
        include: {
          model: Company,
          attributes: ['name', 'defaultlocalsupport'],
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
      const client = await Client.findByPk(req.params.id, {
        include: {
          model: Company,
          attributes: ['name', 'defaultlocalsupport'],
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
        const myCompany = await Company.findOne({
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
        const myTeam = await Team.findOne({
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

      const client = await Client.findByPk(req.params.id);

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
      const client = await Client.findByPk(req.params.id);

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


export default new ClientController();
