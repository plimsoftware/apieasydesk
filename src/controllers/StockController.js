import Stock from '../models/Stock';
import Product from '../models/Product';

class StockController {
  // Store
  async store(req, res) {
    if (req.body.product_id) {
      try {
        const prod = await Product.findByPk(req.body.product_id);

        if (!prod) {
          return res.status(400).json({
            errors: ['Produto não existe.'],
          });
        }

        const oldStock = await Stock.findOne({
          where: {
            product_id: req.body.product_id,
          },
        });

        if (oldStock) {
          return res.status(400).json({
            errors: ['Já existe registo para esse produto.'],
          });
        }
      } catch (e) {
        return res.status(400).json({
          errors: e.parent.code,
        });
      }
    } else {
      return res.status(400).json({
        errors: ['Necessário Product ID'],
      });
    }

    try {
      const novoStock = await Stock.create(req.body);

      return res.json(novoStock);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const stock = await Stock.findAll();
      return res.json(stock);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const stock = await Stock.findOne({
        where: {
          product_id: req.params.id,
        },
      });

      return res.json({ stock });
    } catch (e) {
      return res.status(400).json({
        errors: ['Stock não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const stock = await Stock.findOne({
        where: {
          product_id: req.params.id,
        },
      });

      if (!stock) {
        return res.status(400).json({
          errors: ['Stock não existe.'],
        });
      }

      const novosDados = await stock.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const stock = await Stock.findOne({
        where: {
          product_id: req.params.id,
        },
      });

      if (!stock) {
        return res.status(400).json({
          errors: ['Stock não existe.'],
        });
      }

      await stock.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new StockController();
