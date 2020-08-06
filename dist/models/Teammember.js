"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Teammember extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      userid: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      teamid: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      active: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
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
      tableName: 'teammembers',
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { sourceKey: 'userid', foreignKey: 'id' });
    this.hasOne(models.Team, { sourceKey: 'teamid', foreignKey: 'id' });
  }
} exports.default = Teammember;
