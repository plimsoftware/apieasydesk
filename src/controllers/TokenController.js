import jwt from 'jsonwebtoken';
import User from '../models/User';


class TokenController {
  async store(req, res) {
    const { userid = '', password = '' } = req.body;

    if (!userid || !password) {
      return res.status(401).json({
        errors: ['Invalid Credentials.'],
      });
    }

    const myUser = await User.findOne({ where: { user: userid } });

    if (!myUser) {
      return res.status(401).json({
        errors: ['User does not exist.', myUser],
      });
    }

    if (!(await myUser.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Invalid Password.'],
      });
    }

    const { user, name, profile } = myUser;
    const token = jwt.sign({ user, name, profile }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      client: {
        user: myUser.user,
        name: myUser.name,
        profile: myUser.profile,
      },
    });
  }
}

export default new TokenController();
