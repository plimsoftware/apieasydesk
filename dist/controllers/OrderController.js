"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);
var _Orderdetail = require('../models/Orderdetail'); var _Orderdetail2 = _interopRequireDefault(_Orderdetail);

class OrderController {
  // Store
  async store(req, res) {
    const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

    try {
      const {
        client_id, order_address1, order_address2, order_location,
        order_locationcp, order_phone, order_email, nrstockout,
      } = req.body;
      const orderid = `${Date.now()}_${aleatorio()}${client_id}`;

      const novaOrder = await _Order2.default.create({
        orderid,
        client_id,
        order_address1,
        order_address2,
        order_location,
        order_locationcp,
        order_phone,
        order_email,
        nrstockout,
        shipped: false,
        ship_status: 'Pendente',
      });

      return res.json(novaOrder);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Index
  async index(req, res) {
    try {
      const orders = await _Order2.default.findAll({
        include: {
          model: _Orderdetail2.default,
        },
      });
      return res.json(orders);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const order = await _Order2.default.findOne({
        where: { orderid: req.params.id },
        include: {
          model: _Orderdetail2.default,
        },
      });
      return res.json(order);
    } catch (e) {
      return res.status(400).json({
        errors: ['Ordem não existe.'],
      });
    }
  }

  // Show Admin
  async showadmin(req, res) {
    if (req.query.id) {
      try {
        const order = await _Order2.default.findOne({
          where: { orderid: req.query.id },
          include: {
            model: _Orderdetail2.default,
          },
        });
        return res.json(order);
      } catch (e) {
        return res.status(400).json({
          errors: ['Ordem não existe.'],
        });
      }
    }

    if (req.query.email) {
      try {
        const order = await _Order2.default.findAll({
          where: { order_email: req.query.email },
          include: {
            model: _Orderdetail2.default,
          },
        });
        return res.json(order);
      } catch (e) {
        return res.status(400).json({
          errors: ['Ordem não existe.'],
        });
      }
    }

    if (req.query.status) {
      try {
        const order = await _Order2.default.findAll({
          where: { ship_status: req.query.status },
          include: {
            model: _Orderdetail2.default,
          },
        });
        return res.json(order);
      } catch (e) {
        return res.status(400).json({
          errors: ['Ordem não existe.'],
        });
      }
    }

    return res.json();
  }

  // List orders by client
  async indexbyid(req, res) {
    try {
      const order = await _Order2.default.findAll({
        where: { client_id: req.params.id },
      });
      return res.json(order);
    } catch (e) {
      return res.status(400).json({
        errors: ['Ordem não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const order = await _Order2.default.findOne({ where: { orderid: req.params.id } });

      if (!order) {
        return res.status(400).json({
          errors: ['Ordem não existe.'],
        });
      }

      const novosDados = await order.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const order = await _Order2.default.findOne({ where: { orderid: req.params.id } });

      if (!order) {
        return res.status(400).json({
          errors: ['Ordem não existe.'],
        });
      }

      await order.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new OrderController();
