"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CompanyController = require('../controllers/CompanyController'); var _CompanyController2 = _interopRequireDefault(_CompanyController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();


router.get('/', _loginRequired2.default, _CompanyController2.default.index);
router.get('/:id', _loginRequired2.default, _CompanyController2.default.show);
router.post('/', _loginRequiredAdmin2.default, _CompanyController2.default.store);
router.put('/:id', _loginRequiredAdmin2.default, _CompanyController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _CompanyController2.default.delete);

exports. default = router;
