import Team from '../models/Team';
import Teammember from '../models/Teammember';
import User from '../models/User';

class TeammemberController {
  // Store
  async store(req, res) {
    const { userid, teamid } = req.body;
    try {
      const findUser = await User.findByPk(userid);

      if (!findUser) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const findTeam = await Team.findByPk(teamid);

      if (!findTeam) {
        return res.status(400).json({
          errors: ['Team does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const newTeammember = await Teammember.create(myBody);

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
      const { full, username } = req.query;

      if (full) {
        const teammember = await Teammember.findAll({
          include: {
            attributes: ['name', 'username'],
            model: User,
          },
        });
        return res.json(teammember);
      }

      if (username) {
        const teammember = await Teammember.findAll({
          include: [
            {
              attributes: ['name', 'username'],
              model: User,
              where: {
                username,
              },
            },
            {
              attributes: ['name'],
              model: Team,
            },
          ],
        });
        return res.json(teammember);
      }

      const teammember = await Teammember.findAll({
        include: {
          attributes: ['name', 'username'],
          where: {
            active: true,
          },
          model: User,
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
      const teammember = await Teammember.findByPk(req.params.id, {
        include: {
          attributes: ['name', 'username'],
          model: User,
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
      const findTeammember = await Teammember.findByPk(req.params.id);

      if (!findTeammember) {
        return res.status(400).json({
          errors: ['Team member does not exist.'],
        });
      }

      const { userid, teamid } = req.body;

      if (userid) {
        const findUser = await User.findByPk(userid);

        if (!findUser) {
          return res.status(400).json({
            errors: ['User does not exist.'],
          });
        }
      }

      if (teamid) {
        const findTeam = await Team.findByPk(teamid);

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
      const teammember = await Teammember.findByPk(req.params.id);

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

export default new TeammemberController();
