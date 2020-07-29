import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import UserProf from '../models/UserProf';
import Profile from '../models/Profile';
import Company from '../models/Company';
import Team from '../models/Team';
import Teammember from '../models/Teammember';
import Client from '../models/Client';
import Category from '../models/Category';

const models = [User, UserProf, Profile, Company, Team, Teammember, Client, Category];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
