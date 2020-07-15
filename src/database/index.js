import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import ProdCat from '../models/ProdCat';
import Product from '../models/Product';
import Photo from '../models/Photo';
import Client from '../models/Client';
import Order from '../models/Order';
import Orderdetail from '../models/Orderdetail';
import Stock from '../models/Stock';

const models = [User, ProdCat, Product, Photo, Client, Order, Orderdetail, Stock];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
