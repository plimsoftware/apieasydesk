import jwt from 'jsonwebtoken';
import User from '../models/User';


class TokenController {
  async store(req, res) {
    const { userid = '', password = '', profile = '' } = req.body;

    if (!userid || !password) {
      return res.status(401).json({
        errors: ['Invalid Credentials.'],
      });
    }

    const myUser = await User.findOne({ where: { username: userid } });

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

    const { username, name } = myUser;
    const token = jwt.sign({ username, name, profile }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      client: {
        username: myUser.username,
        name: myUser.name,
        profile,
      },
    });
  }
}

export default new TokenController();
