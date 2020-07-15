import Sequelize, { Model } from 'sequelize';

export default class Stock extends Model {
  static init(sequelize) {
    super.init({
      store: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      warehouse: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      expedition: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.VIRTUAL,
        get() {
          return this.store + this.warehouse + this.expedition;
        },

      },
    }, {
      sequelize,
      tableName: 'stock',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id' });
  }
}
