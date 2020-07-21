import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const { username, name, profile } = dados;
    const myUser = await User.findOne({
      where: {
        username,
      },
    });

    if (!myUser) {
      return res.status(401).json({
        errors: ['User invalid.'],
      });
    }

    if (profile !== 'Administrator') {
      return res.status(401).json({
        errors: ['User invalid.'],
      });
    }

    req.userUser = username;
    req.userName = name;
    req.userProfile = profile;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expired or invalid.'],
    });
  }
};
