import Sequelize, { Model } from 'sequelize';

export default class Orderdetail extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Preço precisa de ser um número',
          },
        },
      },
      tax: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'IVA precisa de ser um número',
          },
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'Quantidade precisa de ser um número',
          },
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      order_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 45],
            msg: 'Status não deve ter mais de 45 caracteres',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'orderdetails',
    });

    return this;
  }
}
