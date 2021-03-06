"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _ProdCat = require('../models/ProdCat'); var _ProdCat2 = _interopRequireDefault(_ProdCat);

class ProductController {
  // Store
  async store(req, res) {
    if (req.body.category_id) {
      try {
        const prodCat = await _ProdCat2.default.findByPk(req.body.category_id);

        if (!prodCat) {
          return res.status(400).json({
            errors: ['Categoria não existe.'],
          });
        }
      } catch (e) {
        return res.status(400).json({
          errors: e.parent.code,
        });
      }
    }

    try {
      const novoProduct = await _Product2.default.create(req.body);

      const {
        id, name, price, priceunit, tax, discount, visible, weight, cart_desc, short_desc,
        long_desc, category_id,
      } = novoProduct;
      return res.json({
        id,
        name,
        price,
        priceunit,
        tax,
        discount,
        visible,
        weight,
        cart_desc,
        short_desc,
        long_desc,
        category_id,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      if (req.query.catid) {
        if (req.query.admin) {
          const whereStatement = {};

          if (req.query.filterStore === 'true') whereStatement.store = 0;
          if (req.query.filterWarehouse === 'true') whereStatement.warehouse = 0;

          const product = await _Product2.default.findAll({
            attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
              'long_desc', 'category_id'],
            order: [['name', 'ASC']],
            where: {
              category_id: req.query.catid,
            },
          });
          return res.json(product);
        }
        const product = await _Product2.default.findAll({
          attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
            'long_desc', 'category_id'],
          order: [['name', 'ASC']],
          where: {
            category_id: req.query.catid,
            visible: true,
          },
        });
        return res.json(product);
      }
      if (req.query.list) {
        const product = await _Product2.default.findAll({
          attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
            'long_desc', 'category_id'],
          order: [['name', 'ASC']],
          where: {
            id: req.query.list,
            visible: true,
          },
        });
        return res.json(product);
      }
      if (req.query.admin) {
        const whereStatement = {};

        if (req.query.filterStore === 'true') whereStatement.store = 0;
        if (req.query.filterWarehouse === 'true') whereStatement.warehouse = 0;

        const product = await _Product2.default.findAll({
          attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
            'long_desc', 'category_id'],
          order: [['name', 'ASC']],
        });
        return res.json(product);
      }
      const product = await _Product2.default.findAll({
        attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
          'long_desc', 'category_id'],
        order: [['name', 'ASC']],
        where: {
          visible: true,
        },
      });
      return res.json(product);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      if (req.query.admin) {
        const product = await _Product2.default.findByPk(req.params.id, {
          attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
            'long_desc', 'category_id'],
          order: [['name', 'ASC']],
        });

        return res.json({ product });
      }
      const product = await _Product2.default.findByPk(req.params.id, {
        attributes: ['id', 'name', 'price', 'priceunit', 'tax', 'discount', 'visible', 'weight', 'cart_desc', 'short_desc',
          'long_desc', 'category_id'],
        order: [['name', 'ASC']],
        where: {
          visible: true,
        },
      });

      return res.json({ product });
    } catch (e) {
      return res.status(400).json({
        errors: ['Produto não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const product = await _Product2.default.findByPk(req.params.id);

      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe.'],
        });
      }

      const novosDados = await product.update(req.body);
      const {
        id,
        name,
        price,
        priceunit,
        tax,
        discount,
        visible,
        weight,
        cart_desc,
        short_desc,
        long_desc,
        category_id,
      } = novosDados;
      return res.json({
        id,
        name,
        price,
        priceunit,
        tax,
        discount,
        visible,
        weight,
        cart_desc,
        short_desc,
        long_desc,
        category_id,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const product = await _Product2.default.findByPk(req.params.id);

      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe.'],
        });
      }

      await product.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new ProductController();
