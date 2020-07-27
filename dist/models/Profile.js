"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Profile extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Profile already exists',
        },
        validate: {
          len: {
            args: [3, 100],
            msg: 'Profile must be between 3 and 100 characters',
          },
        },
      },
      createdby: {
        type: _sequelize2.default.STRING,
        defaultValue: 'SYSTEM',
      },
      updatedby: {
        type: _sequelize2.default.STRING,
        defaultValue: 'SYSTEM',
      },
      active: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
      tableName: 'profile',
    });

    return this;
  }
} exports.default = Profile;
