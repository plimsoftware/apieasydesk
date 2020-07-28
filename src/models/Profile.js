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
      incmngt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reqmngt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      chgmngt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      clientchg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      clientfull: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      companychg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      companyfull: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      catchg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      catfull: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userchg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userfull: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      inccreate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      inccomplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      incclose: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      inccancel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reqcreate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reqcomplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reqclose: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reqcancel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      chgcreate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      chgcomplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      chgclose: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      chgcancel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'profile',
    });

    return this;
  }
}
