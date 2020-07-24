import Team from '../models/Team';
import Teammember from '../models/Teammember';
import User from '../models/User';

class TeamController {
  // Store
  async store(req, res) {
    const { name } = req.body;
    try {
      const findTeam = await Team.findOne({
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

      const newTeam = await Team.create(myBody);

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
      const { teamname, ls } = req.query;

      if (teamname) {
        const team = await Team.findOne({
          where: { name: teamname },
          include: {
            model: Teammember,
            include: {
              attributes: ['name', 'username'],
              model: User,
            },
          },
        });

        return res.json(team);
      }

      if (ls) {
        const team = await Team.findAll({
          where: { localsupportteam: true },
          include: {
            model: Teammember,
            include: {
              attributes: ['name', 'username'],
              model: User,
            },
          },
        });

        return res.json(team);
      }

      const teams = await Team.findAll({
        order: [['name', 'ASC']],
        include: {
          model: Teammember,
          include: {
            attributes: ['name', 'username'],
            model: User,
          },
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
      const team = await Team.findByPk(req.params.id, {
        include: {
          model: Teammember,
          include: {
            attributes: ['name', 'username'],
            model: User,
          },
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
      const findTeam = await Team.findByPk(req.params.id);

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
      const team = await Team.findByPk(req.params.id);

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

export default new TeamController();
