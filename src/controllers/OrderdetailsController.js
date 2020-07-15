import Orderdetail from '../models/Orderdetail';

class OrderdetailsController {
  // Store
  async store(req, res) {
    try {
      const novaOrderdetail = await Orderdetail.create(req.body);

      return res.json(novaOrderdetail);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const orderdetail = await Orderdetail.findAll();
      return res.json(orderdetail);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const orderdetail = await Orderdetail.findByPk(req.params.id);
      return res.json(orderdetail);
    } catch (e) {
      return res.status(400).json({
        errors: ['Detalhe da ordem não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const orderdetail = await Orderdetail.findByPk(req.params.id);

      if (!orderdetail) {
        return res.status(400).json({
          errors: ['Detalhe da ordem não existe.'],
        });
      }

      const novosDados = await orderdetail.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const orderdetail = await await Orderdetail.findByPk(req.params.id);

      if (!orderdetail) {
        return res.status(400).json({
          errors: ['Detalhe da ordem não existe.'],
        });
      }

      await orderdetail.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new OrderdetailsController();
