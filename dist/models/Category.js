"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Category extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 200],
            msg: 'Description must have between 4 and 200 characters',
          },
        },
      },
      type: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3],
            msg: 'Type must have 3 characters',
          },
        },
      },
      defaultteam: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 300],
            msg: 'Default team name must have between 3 and 100 characters',
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
      parent: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'categories',
    });

    return this;
  }
} exports.default = Category;
