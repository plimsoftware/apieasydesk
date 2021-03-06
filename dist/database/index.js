"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _UserProf = require('../models/UserProf'); var _UserProf2 = _interopRequireDefault(_UserProf);
var _Profile = require('../models/Profile'); var _Profile2 = _interopRequireDefault(_Profile);
var _Company = require('../models/Company'); var _Company2 = _interopRequireDefault(_Company);
var _Team = require('../models/Team'); var _Team2 = _interopRequireDefault(_Team);
var _Teammember = require('../models/Teammember'); var _Teammember2 = _interopRequireDefault(_Teammember);
var _Client = require('../models/Client'); var _Client2 = _interopRequireDefault(_Client);
var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _Incident = require('../models/Incident'); var _Incident2 = _interopRequireDefault(_Incident);
var _IncidentHist = require('../models/IncidentHist'); var _IncidentHist2 = _interopRequireDefault(_IncidentHist);

const models = [
  _User2.default,
  _UserProf2.default,
  _Profile2.default,
  _Company2.default,
  _Team2.default,
  _Teammember2.default,
  _Client2.default,
  _Category2.default,
  _Incident2.default,
  _IncidentHist2.default,
];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
