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
      incmngt: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      reqmngt: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      chgmngt: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      admin: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      clientchg: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      clientfull: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      companychg: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      companyfull: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      catchg: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      catfull: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      userchg: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      userfull: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      inccreate: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      inccomplete: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      incclose: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      inccancel: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      reqcreate: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      reqcomplete: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      reqclose: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      reqcancel: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      chgcreate: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      chgcomplete: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      chgclose: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      chgcancel: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'profile',
    });

    return this;
  }
} exports.default = Profile;
