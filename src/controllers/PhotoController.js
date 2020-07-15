import multer from 'multer';
import fs from 'fs';
import { resolve } from 'path';

import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';
import Product from '../models/Product';

const upload = multer(multerConfig).single('photo');

async function removeOld(req) {
  const photoall = await Photo.findAll({
    where: {
      product_id: req.body.product_id,
    },
  });

  if (photoall.length < 2) return;

  const photo = await Photo.findOne({
    attributes: ['id', 'filename'],
    limit: 1,
    order: [['created_at', 'ASC']],
    where: {
      product_id: req.body.product_id,
    },
  });

  if (!photo) return;

  const photoOld = await Photo.findByPk(photo.id);

  if (!photoOld) return;

  if (photoOld.filename !== 'bag.jpg') {
    try {
      fs.unlinkSync(resolve(__dirname, '..', '..', 'uploads', 'images', photoOld.filename));
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


      const product = await Product.findByPk(req.body.product_id);
      if (!product) {
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }


      const { originalname, filename } = req.file;
      const { product_id } = req.body;
      await Photo.create({ originalname, filename, product_id });

      removeOld(req, res);

      return res.json('Updated');
    });
  }

  async delete(req, res) {
    try {
      const photo = await Photo.findOne({
        where: { product_id: req.params.id },
      });

      if (!photo) {
        return res.status(400).json({
          errors: ['Foto não existe.'],
        });
      }

      try {
        fs.unlinkSync(resolve(__dirname, '..', '..', 'uploads', 'images', photo.filename));
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
      await Photo.create({ originalname: 'bag.jpg', filename: 'bag.jpg', product_id: req.params.id });

      return res.json('Foto carregada');
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }
}

export default new PhotoController();
