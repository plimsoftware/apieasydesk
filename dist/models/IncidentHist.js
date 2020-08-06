"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class IncidentHist extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Description must have between 1 and 255 characters',
          },
        },
      },
      incid: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      createdby: {
        type: _sequelize2.default.STRING,
        defaultValue: 'SYSTEM',
      },
    }, {
      sequelize,
      tableName: 'inchist',
    });

    return this;
  }

  /* static associate(models) {
    this.hasOne(models.Company, { sourceKey: 'companyid', foreignKey: 'id' });
  } */
} exports.default = IncidentHist;
