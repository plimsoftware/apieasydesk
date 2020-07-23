import User from '../models/User';
import UserProf from '../models/UserProf';
import Profile from '../models/Profile';

class UserController {
  // Store
  async store(req, res) {
    try {
      const myprofile = await Profile.findOne({
        where: {
          name: req.body.profile,
        },
      });

      if (!myprofile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      const novoUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
      });

      const novUserProf = await UserProf.create({
        username: req.body.username,
        profile: req.body.profile,
        userid: novoUser.id,
      });
      const {
        id, username, name,
      } = novoUser;
      const {
        profile,
      } = novUserProf;
      return res.json({
        id, username, name, profile,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'username', 'name'],
        include: {
          model: UserProf,
          attributes: ['profile'],
        },
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { userid } = req.query;
      if (userid) {
        const user = await User.findByPk(userid, {
          include: {
            model: UserProf,
            attributes: ['profile'],
          },
        });

        const {
          id, name, username, UserProfs,
        } = user;
        return res.json({
          id, name, username, UserProfs,
        });
      }

      const user = await User.findOne({
        where: { username: req.params.id },
        include: {
          model: UserProf,
          attributes: ['profile'],
        },
      });

      const {
        id, name, username, UserProfs,
      } = user;
      return res.json({
        id, name, username, UserProfs,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['User does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new UserController();
