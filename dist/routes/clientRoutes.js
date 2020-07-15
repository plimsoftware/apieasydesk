"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ClientController = require('../controllers/ClientController'); var _ClientController2 = _interopRequireDefault(_ClientController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();


router.get('/', _loginRequiredAdmin2.default, _ClientController2.default.index); // Lista Clientes
// router.get('/admin/:id', loginRequiredAdmin, clientController.showadmin); // Lista Cliente
// router.delete('/admin/:id', loginRequiredAdmin, clientController.delete); // Apaga cliente


// router.post('/', clientController.store); // Cria cliente
// router.put('/:id', loginRequiredAdmin, clientController.update); // Update cliente
// router.delete('/:id', loginRequiredAdmin, clientController.delete); // Apaga cliente

exports. default = router;
