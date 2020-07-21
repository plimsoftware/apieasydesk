import Sequelize, { Model } from 'sequelize';

export default class Company extends Model {
  static init(sequelize) {
    super.init({
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Company name must have between 5 and 100 characters',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'Address must have between 5 and 255 characters',
          },
        },
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Location must have between 3 and 35 characters',
          },
        },
      },
      locationcp: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 10],
            msg: 'Postal code must have between 4 and 10 characters',
          },
        },
      },
      defaultlocalsupport: {
        type: Sequelize.STRING,
        defaultValue: 'General Local Support',
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
      tableName: 'company',
    });

    return this;
  }
}
