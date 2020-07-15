import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
// import ProdCat from '../models/ProdCat';
// import Product from '../models/Product';
// import Client from '../models/Client';

const models = [User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
