"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Company extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      active: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
      },
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Company name must have between 5 and 100 characters',
          },
        },
      },
      address: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'Address must have between 5 and 255 characters',
          },
        },
      },
      location: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Location must have between 3 and 35 characters',
          },
        },
      },
      locationcp: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 10],
            msg: 'Postal code must have between 4 and 10 characters',
          },
        },
      },
      defaultlocalsupport: {
        type: _sequelize2.default.STRING,
        defaultValue: 'General Local Support',
      },
      phone: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid E-mail',
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
    }, {
      sequelize,
      tableName: 'company',
    });

    return this;
  }
} exports.default = Company;
