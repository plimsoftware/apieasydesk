"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Incident extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      title: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 150],
            msg: 'Title name must have between 4 and 150 characters',
          },
        },
      },
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'Description must have between 5 and 255 characters',
          },
        },
      },
      type: {
        type: _sequelize2.default.STRING,
        defaultValue: 'inc',
      },
      categorynv1: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      categorynv2: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      categorynv3: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      status: {
        type: _sequelize2.default.STRING,
        defaultValue: 'Initiated',
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
      companyid: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      clientid: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      reopenings: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      reclassified: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: 0,
      },
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      company: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      assigneduser: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      assignedteam: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      createdby: {
        type: _sequelize2.default.STRING,
        defaultValue: 'SYSTEM',
      },
      updatedby: {
        type: _sequelize2.default.STRING,
        defaultValue: 'SYSTEM',
      },
      completed_at: {
        type: _sequelize2.default.DATE,
        defaultValue: null,
      },
      closed_at: {
        type: _sequelize2.default.DATE,
        defaultValue: null,
      },
      canceled_at: {
        type: _sequelize2.default.DATE,
        defaultValue: null,
      },
    }, {
      sequelize,
      tableName: 'incidents',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.IncidentHist, { foreignKey: 'incid' });
  }
} exports.default = Incident;
