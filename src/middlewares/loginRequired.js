import jwt from 'jsonwebtoken';
import Client from '../models/Client';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    // Para validar se alterou o email. Se sim, precisa de novo token
    const client = await Client.findOne({
      where: {
        id,
        email,
      },
    });

    if (!client) {
      return res.status(401).json({
        errors: ['Cliente inválido.'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
