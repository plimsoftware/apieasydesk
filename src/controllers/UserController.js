import User from '../models/User';

class UserController {
  // Store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {
        user, name, profile,
      } = novoUser;
      return res.json({ user, name, profile });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['user', 'name', 'profile'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const {
        id, nome, email, admin,
      } = user;
      return res.json({
        id, nome, email, admin,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['User não existe.'],
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
          errors: ['User não existe.'],
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
