import Sequelize, { Model } from 'sequelize';

export default class Category extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 200],
            msg: 'Description must have between 4 and 200 characters',
          },
        },
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3],
            msg: 'Type must have 3 characters',
          },
        },
      },
      defaultteam: {
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
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      parent: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'categories',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Category, { foreignKey: 'parent' });
  }
}
