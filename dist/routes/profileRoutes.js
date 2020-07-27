"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProfileController = require('../controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);

var _loginRequiredAdmin = require('../middlewares/loginRequiredAdmin'); var _loginRequiredAdmin2 = _interopRequireDefault(_loginRequiredAdmin);

const router = new (0, _express.Router)();

router.get('/', _ProfileController2.default.index);
router.get('/:id', _ProfileController2.default.show);
router.post('/', _loginRequiredAdmin2.default, _ProfileController2.default.store);
router.put('/:id', _loginRequiredAdmin2.default, _ProfileController2.default.update);
router.delete('/:id', _loginRequiredAdmin2.default, _ProfileController2.default.delete);

exports. default = router;
