"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);


class TokenController {
  async store(req, res) {
    const { userid = '', password = '', profile = '' } = req.body;

    if (!userid || !password) {
      return res.status(401).json({
        errors: ['Invalid Credentials.'],
      });
    }

    const myUser = await _User2.default.findOne({ where: { username: userid } });

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
    const token = _jsonwebtoken2.default.sign({ username, name, profile }, process.env.TOKEN_SECRET, {
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

exports. default = new TokenController();
