"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { username, name, profile } = dados;
    const myUser = await _User2.default.findOne({
      where: {
        username,
      },
    });

    if (!myUser) {
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
