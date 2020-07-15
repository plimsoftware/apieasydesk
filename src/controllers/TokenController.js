import jwt from 'jsonwebtoken';
import Client from '../models/Client';
import User from '../models/User';


class TokenController {
  async store(req, res) {
    const { email = '', password = '', userType = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    // USER
    if (userType === 'client') {
      const client = await Client.findOne({ where: { email } });

      if (!client) {
        return res.status(401).json({
          errors: ['Cliente não existe.'],
        });
      }

      if (!(await client.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Password inválida.'],
        });
      }

      const { id } = client;
      const token = jwt.sign({ id, email, userType }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, client: { name: client.name, id, email }, admin: false });
    }

    // ADMIN
    const admin = await User.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({
        errors: ['User não existe.', admin],
      });
    }

    if (!(await admin.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Password inválida.'],
      });
    }

    const { id } = admin;
    const token = jwt.sign({ id, email, userType }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, client: { name: admin.name, id, email }, admin: true });
  }

  async checkPass(req, res) {
    const { email, password } = req.body;

    const client = await Client.findOne({ where: { email } });

    if (!client) {
      return res.status(401).json({ valid: false });
    }

    if (!(await client.passwordIsValid(password))) {
      return res.status(401).json({ valid: false });
    }

    return res.json({ valid: true });
  }
}

export default new TokenController();
