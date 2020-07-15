import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Client extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'Nome deve ter entre 1 a 100 caracteres',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'Apelido deve ter entre 1 a 100 caracteres',
          },
        },
      },
      address1: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Morada deve ter entre 5 a 100 caracteres',
          },
        },
      },
      address2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 100],
            msg: 'Morada (cont) deve ter entre 0 a 100 caracteres',
          },
        },
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Localização deve ter entre 3 a 35 caracteres',
          },
        },
      },
      locationcp: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8],
            msg: 'Código Postal deve ter 8 caracteres',
          },
        },
      },
      address1deliver: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      address2deliver: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      locationdeliver: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      locationcpdeliver: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      phone: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Este e-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      email_verification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // Este campo só existe aqui e não na BD
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A password deve ter entre 6 a 50 caracteres',
          },
        },
      },
      verification_code: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      code_expired: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    }, {
      sequelize,
      tableName: 'clients',
    });

    this.addHook('beforeSave', async (client) => { // Vai correr antes de fazer o Save
      if (client.password) {
        client.password_hash = await bcryptjs.hash(client.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
