"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class ProdCat extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Categoria já existe',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'productcategories',
    });

    return this;
  }
} exports.default = ProdCat;
