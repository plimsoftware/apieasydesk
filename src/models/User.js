import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must be between 3 and 255 characters',
          },
        },
      },
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Username already exists',
        },
        validate: {
          len: {
            args: [3, 100],
            msg: 'Username must be between 3 and 100 characters',
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
      initialpassword: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Password must be between 6 and 50 characters',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'users',
    });

    this.addHook('beforeSave', async (user) => { // Vai correr antes de fazer o Save
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }


  static associate(models) {
    this.hasMany(models.UserProf, { foreignKey: 'userid' });
  }
}
