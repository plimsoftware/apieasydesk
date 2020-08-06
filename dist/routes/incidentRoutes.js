"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _IncidentController = require('../controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();


router.get('/', _loginRequired2.default, _IncidentController2.default.index);
router.get('/:id', _loginRequired2.default, _IncidentController2.default.show);
router.post('/', _loginRequired2.default, _IncidentController2.default.store);
router.put('/:id', _loginRequired2.default, _IncidentController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _IncidentController2.default.delete);

exports. default = router;
