"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Client extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'Nome deve ter entre 1 a 100 caracteres',
          },
        },
      },
      surname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'Apelido deve ter entre 1 a 100 caracteres',
          },
        },
      },
      address1: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Morada deve ter entre 5 a 100 caracteres',
          },
        },
      },
      address2: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 100],
            msg: 'Morada (cont) deve ter entre 0 a 100 caracteres',
          },
        },
      },
      location: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Localização deve ter entre 3 a 35 caracteres',
          },
        },
      },
      locationcp: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8],
            msg: 'Código Postal deve ter 8 caracteres',
          },
        },
      },
      address1deliver: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      address2deliver: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      locationdeliver: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      locationcpdeliver: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      phone: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // Este campo só existe aqui e não na BD
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A password deve ter entre 6 a 50 caracteres',
          },
        },
      },
      verification_code: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      code_expired: {
        type: _sequelize2.default.DATE,
        defaultValue: null,
      },
    }, {
      sequelize,
      tableName: 'clients',
    });

    this.addHook('beforeSave', async (client) => { // Vai correr antes de fazer o Save
      if (client.password) {
        client.password_hash = await _bcryptjs2.default.hash(client.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = Client;
