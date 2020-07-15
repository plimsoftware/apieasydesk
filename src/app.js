import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import prodCatRoutes from './routes/prodCatRoutes';
import productRoutes from './routes/productRoutes';
import photoRoutes from './routes/photoRoutes';
import clientRoutes from './routes/clientRoutes';
import orderRoutes from './routes/orderRoutes';
import orderdetailRoutes from './routes/orderdetailRoutes';
import stockRoutes from './routes/stockRoutes';
import portfolioRoutes from './routes/portfolioRoutes';

const whitelist = [
  'https://store.plimsoftware.pt',
  'https://storeapi.plimsoftware.pt',
  'http://localhost:3000',
  'https://www.plimsoftware.pt',
];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/prodcat/', prodCatRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/product/', productRoutes);
    this.app.use('/photos/', photoRoutes);
    this.app.use('/clients/', clientRoutes);
    this.app.use('/order/', orderRoutes);
    this.app.use('/orderdetail/', orderdetailRoutes);
    this.app.use('/stock/', stockRoutes);

    this.app.use('/message/', portfolioRoutes); // Route Used in Portfolio
  }
}

export default new App().app;
