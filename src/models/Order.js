import Sequelize, { Model } from 'sequelize';

export default class Order extends Model {
  static init(sequelize) {
    super.init({
      orderid: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esta ordem já existe',
        },
      },
      client_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      order_address1: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 100],
            msg: 'Morada deve ter entre 5 a 100 caracteres',
          },
        },
      },
      order_address2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 100],
            msg: 'Morada (cont) deve ter entre 0 a 100 caracteres',
          },
        },
      },
      order_location: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Localização deve ter entre 3 a 35 caracteres',
          },
        },
      },
      order_locationcp: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8],
            msg: 'Código Postal deve ter 8 caracteres',
          },
        },
      },
      order_phone: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      nrstockout: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      order_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      shipped: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ship_status: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 20],
            msg: 'Status da encomenda não pode ter mais de 20 caracteres',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'orders',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Orderdetail, { foreignKey: 'order_id' });
  }
}
