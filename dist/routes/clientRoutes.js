"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ClientController = require('../controllers/ClientController'); var _ClientController2 = _interopRequireDefault(_ClientController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();


router.get('/', _loginRequired2.default, _ClientController2.default.index);
router.post('/', _loginRequired2.default, _ClientController2.default.store);
router.get('/:id', _loginRequired2.default, _ClientController2.default.show);
router.put('/:id', _loginRequired2.default, _ClientController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _ClientController2.default.delete);

exports. default = router;
