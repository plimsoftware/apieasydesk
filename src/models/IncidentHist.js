import Sequelize, { Model } from 'sequelize';

export default class IncidentHist extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Description must have between 1 and 255 characters',
          },
        },
      },
      incid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdby: {
        type: Sequelize.STRING,
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
}
