"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserProfController = require('../controllers/UserProfController'); var _UserProfController2 = _interopRequireDefault(_UserProfController);
// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new (0, _express.Router)();


router.get('/', _UserProfController2.default.index); // TEMPORARIO SEM LOGINREQUIRED
// router.get('/:id', loginRequiredAdmin, userController.show); // Lista User
// router.post('/', userprofController.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
// router.delete('/:id', loginRequiredAdmin, userController.delete); // Apaga user

exports. default = router;
