import Sequelize, { Model } from 'sequelize';

export default class Incident extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 150],
            msg: 'Title name must have between 4 and 150 characters',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'Description must have between 5 and 255 characters',
          },
        },
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'inc',
      },
      categorynv1: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      categorynv2: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      categorynv3: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Initiated',
      },
      phone: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid E-mail',
          },
        },
      },
      companyid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      clientid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      reopenings: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      reclassified: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      company: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      assigneduser: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      assignedteam: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      createdby: {
        type: Sequelize.STRING,
        defaultValue: 'SYSTEM',
      },
      updatedby: {
        type: Sequelize.STRING,
        defaultValue: 'SYSTEM',
      },
      completed_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      closed_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      canceled_at: {
        type: Sequelize.DATE,
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
}
