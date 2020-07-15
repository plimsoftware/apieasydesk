// Used by Portfolio
import sendMailVerification from '../modules/sendMail';

class PortfolioController {
  async sendMail(req, res) {
    const { nome, email, mensagem } = req.body;

    const bodyMail = `Mensagem de : ${nome}<br>`
    + `<p>Email: ${email}</p>`
    + `<p>Mensagem: ${mensagem}</p>`;


    sendMailVerification(process.env.KEYSENDGRID, 'plimsoftware@gmail.com', email, 'Contato Portfolio', bodyMail);

    return res.json({ msg: 'Mail enviado' });
  }
}


export default new PortfolioController();
