"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();


router.get('/', _UserController2.default.index);
router.get('/:id', _UserController2.default.show); // search by username or ?userid
router.post('/', _loginRequiredAdmin2.default, _UserController2.default.store);
router.put('/changepassword/', _loginRequired2.default, _UserController2.default.changepass);
router.put('/:id', _loginRequiredAdmin2.default, _UserController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _UserController2.default.delete);

exports. default = router;
