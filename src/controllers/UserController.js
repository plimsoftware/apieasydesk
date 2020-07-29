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

      const findUser = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (findUser) {
        return res.status(400).json({
          errors: ['User already exists.'],
        });
      }

      const myBody = req.body;
      myBody.createdby = req.userUser;
      myBody.updatedby = req.userUser;

      const novoUser = await User.create(myBody);

      const novUserProf = await UserProf.create({
        username: req.body.username,
        profile: req.body.profile,
        userid: novoUser.id,
      });
      const {
        id, username, name, initialpassword, active,
      } = novoUser;
      const {
        profile,
      } = novUserProf;
      return res.json({
        id, username, name, profile, initialpassword, active,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const { userid, full } = req.query;
      if (userid) {
        const user = await User.findOne({
          where: { id: userid },
          include: {
            model: UserProf,
            attributes: ['id', 'profile'],
          },
        });

        const {
          id, username, name, initialpassword, active, created_at,
          createdby, updated_at, updatedby, UserProfs,
        } = user;
        return res.json({
          id,
          username,
          name,
          initialpassword,
          active,
          created_at,
          createdby,
          updated_at,
          updatedby,
          UserProfs,
        });
      }

      if (full) {
        const users = await User.findAll({
          attributes: ['id', 'username', 'name', 'initialpassword', 'active', 'created_at',
            'createdby', 'updated_at', 'updatedby'],
          include: {
            model: UserProf,
            attributes: ['id', 'profile'],
          },
        });
        return res.json(users);
      }

      const users = await User.findAll({
        attributes: ['id', 'username', 'name', 'initialpassword', 'active', 'created_at',
          'createdby', 'updated_at', 'updatedby'],
        where: {
          active: true,
        },
        include: {
          model: UserProf,
          attributes: ['id', 'profile'],
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
      const user = await User.findOne({
        where: { username: req.params.id },
        include: {
          model: UserProf,
          attributes: ['id', 'profile'],
        },
      });

      const {
        id, username, name, initialpassword, active, created_at,
        createdby, updated_at, updatedby, UserProfs,
      } = user;
      return res.json({
        id,
        username,
        name,
        initialpassword,
        active,
        created_at,
        createdby,
        updated_at,
        updatedby,
        UserProfs,
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
          errors: ['User does not exist.'],
        });
      }

      const myBody = req.body;
      myBody.updatedby = req.userUser;

      const newData = await user.update(myBody);
      const {
        id, name, username, initialpassword, active, created_at, createdby, updated_at, updatedby,
      } = newData;
      return res.json({
        id, name, username, initialpassword, active, created_at, createdby, updated_at, updatedby,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  async changepass(req, res) {
    try {
      const user = await User.findByPk(req.body.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      await user.update({
        updatedby: req.userUser,
        password: req.body.password,
        initialpassword: false,
      });

      return res.json(null);
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
