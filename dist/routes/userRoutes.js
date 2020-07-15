"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();


router.get('/', _loginRequiredAdmin2.default, _UserController2.default.index); // Lista Users
// router.get('/:id', loginRequiredAdmin, userController.show); // Lista User
router.post('/', _UserController2.default.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
// router.delete('/:id', loginRequiredAdmin, userController.delete); // Apaga user

exports. default = router;
