"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _userprofRoutes = require('./routes/userprofRoutes'); var _userprofRoutes2 = _interopRequireDefault(_userprofRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _profileRoutes = require('./routes/profileRoutes'); var _profileRoutes2 = _interopRequireDefault(_profileRoutes);
var _clientRoutes = require('./routes/clientRoutes'); var _clientRoutes2 = _interopRequireDefault(_clientRoutes);
var _companyRoutes = require('./routes/companyRoutes'); var _companyRoutes2 = _interopRequireDefault(_companyRoutes);
var _teamRoutes = require('./routes/teamRoutes'); var _teamRoutes2 = _interopRequireDefault(_teamRoutes);
var _teammembersRoutes = require('./routes/teammembersRoutes'); var _teammembersRoutes2 = _interopRequireDefault(_teammembersRoutes);
var _categoryRoutes = require('./routes/categoryRoutes'); var _categoryRoutes2 = _interopRequireDefault(_categoryRoutes);
var _incidentRoutes = require('./routes/incidentRoutes'); var _incidentRoutes2 = _interopRequireDefault(_incidentRoutes);
var _incidentHistRoutes = require('./routes/incidentHistRoutes'); var _incidentHistRoutes2 = _interopRequireDefault(_incidentHistRoutes);

const whitelist = [
  'http://localhost:3002',
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
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/userprof/', _userprofRoutes2.default);
    this.app.use('/profile/', _profileRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/clients/', _clientRoutes2.default);
    this.app.use('/company/', _companyRoutes2.default);
    this.app.use('/teams/', _teamRoutes2.default);
    this.app.use('/teammembers/', _teammembersRoutes2.default);
    this.app.use('/category/', _categoryRoutes2.default);
    this.app.use('/incident/', _incidentRoutes2.default);
    this.app.use('/incidenthist/', _incidentHistRoutes2.default);
  }
}

exports. default = new App().app;
