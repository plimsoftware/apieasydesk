import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import UserProf from '../models/UserProf';
import Profile from '../models/Profile';
import Company from '../models/Company';
import Team from '../models/Team';
import Teammember from '../models/Teammember';

const models = [User, UserProf, Profile, Company, Team, Teammember];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
