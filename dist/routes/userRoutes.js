"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new (0, _express.Router)();


router.get('/', _UserController2.default.index); // TEMPORARIO SEM LOGINREQUIRED
router.get('/:id', _UserController2.default.show); // TEMPORARIO SEM LOGINREQUIRED
router.post('/', _UserController2.default.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
router.delete('/:id', _UserController2.default.delete); // TEMPORARIO SEM LOGINREQUIRED

exports. default = router;
