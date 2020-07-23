import Sequelize, { Model } from 'sequelize';

export default class Teammember extends Model {
  static init(sequelize) {
    super.init({
      userid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      teamid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdby: {
        type: Sequelize.STRING,
        defaultValue: 'SYSTEM',
      },
      updatedby: {
        type: Sequelize.STRING,
        defaultValue: 'SYSTEM',
      },
    }, {
      sequelize,
      tableName: 'teammembers',
    });

    return this;
  }
}
