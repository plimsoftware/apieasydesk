"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TeammembersController = require('../controllers/TeammembersController'); var _TeammembersController2 = _interopRequireDefault(_TeammembersController);
var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();


router.get('/', _TeammembersController2.default.index);
router.get('/:id', _TeammembersController2.default.show);
router.post('/', _loginRequiredAdmin2.default, _TeammembersController2.default.store);
router.put('/:id', _loginRequiredAdmin2.default, _TeammembersController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _TeammembersController2.default.delete);

exports. default = router;
