import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import UserProf from '../models/UserProf';
import Profile from '../models/Profile';
import Company from '../models/Company';

const models = [User, UserProf, Profile, Company];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
