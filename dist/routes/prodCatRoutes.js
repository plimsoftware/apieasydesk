"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProdCatController = require('../controllers/ProdCatController'); var _ProdCatController2 = _interopRequireDefault(_ProdCatController);

var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();

router.get('/', _ProdCatController2.default.index); // Lista categorias do produto
router.get('/:id', _loginRequiredAdmin2.default, _ProdCatController2.default.show); // Lista categoria do produto
router.post('/', _loginRequiredAdmin2.default, _ProdCatController2.default.store); // Cria categoria do produto
router.put('/:id', _loginRequiredAdmin2.default, _ProdCatController2.default.update); // Update categoria do produto
router.delete('/:id', _loginRequiredAdmin2.default, _ProdCatController2.default.delete); // Apaga categoria do produto

exports. default = router;
