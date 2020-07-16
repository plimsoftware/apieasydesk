import Sequelize, { Model } from 'sequelize';

export default class Profile extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Profile already exists',
        },
        validate: {
          len: {
            args: [3, 100],
            msg: 'Profile must be between 3 and 100 characters',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'profile',
    });

    return this;
  }
}
