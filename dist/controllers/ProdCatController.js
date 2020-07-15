"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ProdCat = require('../models/ProdCat'); var _ProdCat2 = _interopRequireDefault(_ProdCat);

class ProdCatController {
  // Store
  async store(req, res) {
    try {
      const novoProdCat = await _ProdCat2.default.create(req.body);
      const { id, name } = novoProdCat;
      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const prodCat = await _ProdCat2.default.findAll({ attributes: ['id', 'name'], order: [['name', 'ASC']] });
      return res.json(prodCat);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const prodCat = await _ProdCat2.default.findByPk(req.params.id);

      const { id, name } = prodCat;
      return res.json({ id, name });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['Produto não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const prodCat = await _ProdCat2.default.findByPk(req.params.id);

      if (!prodCat) {
        return res.status(400).json({
          errors: ['Produto não existe.'],
        });
      }

      const novosDados = await prodCat.update(req.body);
      const { id, name } = novosDados;
      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const prodCat = await _ProdCat2.default.findByPk(req.params.id);

      if (!prodCat) {
        return res.status(400).json({
          errors: ['Produto não existe.'],
        });
      }

      await prodCat.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new ProdCatController();
