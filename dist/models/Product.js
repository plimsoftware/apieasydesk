"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Product extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      price: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Preço precisa de ser um número',
          },
        },
      },
      priceunit: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 3],
            msg: 'Unidade de Preço deve ter entre 2 a 3 caracteres',
          },
        },
      },
      tax: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'IVA precisa de ser um número',
          },
        },
      },
      discount: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Desconto precisa de ser um número',
          },
        },
      },
      visible: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
      },
      weight: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Peso precisa de ser um número',
          },
        },
      },
      cart_desc: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 50],
            msg: 'Descrição no carrinho não pode ter mais de 50 caracteres',
          },
        },
      },
      short_desc: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 100],
            msg: 'Descrição curta não pode ter mais de 100 caracteres',
          },
        },
      },
      long_desc: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 255],
            msg: 'Descrição longa não pode ter mais de 255 caracteres',
          },
        },
      },
      category_id: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'products',
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.Photo, { foreignKey: 'product_id' });
    this.hasOne(models.Stock, { as: 'myStock', foreignKey: 'product_id' });
  }
} exports.default = Product;
