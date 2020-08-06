"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _IncidentHistController = require('../controllers/IncidentHistController'); var _IncidentHistController2 = _interopRequireDefault(_IncidentHistController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();


router.get('/', _loginRequired2.default, _IncidentHistController2.default.index);
router.get('/:id', _loginRequired2.default, _IncidentHistController2.default.show); // id is incid
router.post('/', _loginRequired2.default, _IncidentHistController2.default.store);

exports. default = router;
