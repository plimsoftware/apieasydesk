"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('photo');

async function removeOld(req) {
  const photoall = await _Photo2.default.findAll({
    where: {
      product_id: req.body.product_id,
    },
  });

  if (photoall.length < 2) return;

  const photo = await _Photo2.default.findOne({
    attributes: ['id', 'filename'],
    limit: 1,
    order: [['created_at', 'ASC']],
    where: {
      product_id: req.body.product_id,
    },
  });

  if (!photo) return;

  const photoOld = await _Photo2.default.findByPk(photo.id);

  if (!photoOld) return;

  if (photoOld.filename !== 'bag.jpg') {
    try {
      _fs2.default.unlinkSync(_path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images', photoOld.filename));
    } catch (err) {
      console.error(err);
    }
  }

  photoOld.destroy();
}

class PhotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: err.name });
      }


      const product = await _Product2.default.findByPk(req.body.product_id);
      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }


      const { originalname, filename } = req.file;
      const { product_id } = req.body;
      await _Photo2.default.create({ originalname, filename, product_id });

      removeOld(req, res);

      return res.json('Updated');
    });
  }

  async delete(req, res) {
    try {
      const photo = await _Photo2.default.findOne({
        where: { product_id: req.params.id },
      });

      if (!photo) {
        return res.status(400).json({
          errors: ['Foto não existe.'],
        });
      }

      try {
        _fs2.default.unlinkSync(_path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images', photo.filename));
      } catch (err) {
        console.error(err);
      }

      return res.json(photo.filename);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  async initial(req, res) {
    try {
      await _Photo2.default.create({ originalname: 'bag.jpg', filename: 'bag.jpg', product_id: req.params.id });

      return res.json('Foto carregada');
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

exports. default = new PhotoController();
