import Sequelize, { Model } from 'sequelize';

export default class ProdCat extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
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
}
