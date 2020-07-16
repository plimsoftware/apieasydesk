"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProfileController = require('../controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);

// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new (0, _express.Router)();

router.get('/', _ProfileController2.default.index);
router.get('/:id', _ProfileController2.default.show);
router.post('/', _ProfileController2.default.store); // TEMP without login
router.put('/:id', _ProfileController2.default.update); // TEMP without login
router.delete('/:id', _ProfileController2.default.delete); // TEMP without login

exports. default = router;
