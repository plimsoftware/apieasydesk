import Sequelize, { Model } from 'sequelize';

export default class UserProf extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      profile: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

    }, {
      sequelize,
      tableName: 'userprofile',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userid' });
  }
}
