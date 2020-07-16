import Profile from '../models/Profile';

class ProfileController {
  // Store
  async store(req, res) {
    try {
      const novoProfile = await Profile.create(req.body);
      const { id, name } = novoProfile;
      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const profile = await Profile.findAll({ attributes: ['id', 'name'], order: [['name', 'ASC']] });
      return res.json(profile);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      const { id, name } = profile;
      return res.json({ id, name });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['Profile does not exist.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      if (!profile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      const novosDados = await profile.update(req.body);
      const { id, name } = novosDados;
      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      if (!profile) {
        return res.status(400).json({
          errors: ['Profile does not exist.'],
        });
      }

      await profile.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new ProfileController();
