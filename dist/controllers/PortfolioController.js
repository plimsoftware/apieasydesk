"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Used by Portfolio
var _sendMail = require('../modules/sendMail'); var _sendMail2 = _interopRequireDefault(_sendMail);

class PortfolioController {
  async sendMail(req, res) {
    const { nome, email, mensagem } = req.body;

    const bodyMail = `Mensagem de : ${nome}<br>`
    + `<p>Email: ${email}</p>`
    + `<p>Mensagem: ${mensagem}</p>`;


    _sendMail2.default.call(void 0, process.env.KEYSENDGRID, 'plimsoftware@gmail.com', email, 'Contato Portfolio', bodyMail);

    return res.json({ msg: 'Mail enviado' });
  }
}


exports. default = new PortfolioController();
