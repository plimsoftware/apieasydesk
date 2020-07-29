import User from '../models/User';
import Profile from '../models/Profile';
import UserProf from '../models/UserProf';

class UserProfController {
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

      if (!findUser) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const novUserProf = await UserProf.create({
        username: req.body.username,
        profile: req.body.profile,
        userid: req.body.userid,
      });

      return res.json(novUserProf);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const { full } = req.query;

      if (full) {
        const userprof = await UserProf.findAll();
        return res.json(userprof);
      }

      const userprof = await UserProf.findAll({
        where: {
          active: true,
        },
      });
      return res.json(userprof);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const userprof = await UserProf.findByPk(req.params.id);

      return res.json(userprof);
    } catch (e) {
      return res.status(400).json({
        errors: ['User profile does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const userprof = await UserProf.findByPk(req.params.id);

      if (!userprof) {
        return res.status(400).json({
          errors: ['User profile does not exist.'],
        });
      }

      const newData = await userprof.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const userprof = await UserProf.findByPk(req.params.id);

      if (!userprof) {
        return res.status(400).json({
          errors: ['User profile does not exist.'],
        });
      }

      await userprof.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new UserProfController();
