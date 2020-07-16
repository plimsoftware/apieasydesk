import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import userprofRoutes from './routes/userprofRoutes';
import tokenRoutes from './routes/tokenRoutes';
import profileRoutes from './routes/profileRoutes';
import productRoutes from './routes/productRoutes';
import clientRoutes from './routes/clientRoutes';

const whitelist = [
  'http://localhost:3000',
  'https://apieasydesk.plimsoftware.pt',
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
    this.app.use('/userprof/', userprofRoutes);
    this.app.use('/profile/', profileRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/product/', productRoutes);
    this.app.use('/clients/', clientRoutes);
  }
}

export default new App().app;
