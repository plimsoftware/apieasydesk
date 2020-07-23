import Sequelize, { Model } from 'sequelize';

export default class Team extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
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
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      localsupportteam: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      tableName: 'teams',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Teammember, { foreignKey: 'teamid' });
  }
}
