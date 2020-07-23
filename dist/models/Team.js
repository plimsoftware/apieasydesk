"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Team extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Team already exists',
        },
        validate: {
          len: {
            args: [3, 100],
            msg: 'Team name must have between 3 and 100 characters',
          },
        },
      },
      active: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
      },
      localsupportteam: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
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
      tableName: 'teams',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Teammember, { foreignKey: 'teamid' });
  }
} exports.default = Team;
