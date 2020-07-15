"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa de ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({ // Este diskStorage é o disco do servidor onde estiver a correr
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // O null era onde controlavamos o erro
    },
    filename: (req, file, cb) => {
      // Aqui mudamos o nome do ficheiro para outra coisa
      // Não vá o user enviar uma foto com nome estranho
      // Assim convertemos o nome para data
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
