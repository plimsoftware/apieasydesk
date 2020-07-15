"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProductController = require('../controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);

var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();

router.get('/', _ProductController2.default.index); // Lista produtos
router.get('/:id', _ProductController2.default.show); // Lista produto
router.post('/', _loginRequiredAdmin2.default, _ProductController2.default.store); // Cria produto
router.put('/:id', _loginRequiredAdmin2.default, _ProductController2.default.update); // Update produto
router.delete('/:id', _loginRequiredAdmin2.default, _ProductController2.default.delete); // Apaga produto

exports. default = router;
