import Client from '../models/Client';

import sendMailVerification from '../modules/sendMail';

class ClientController {
  // Store
  async store(req, res) {
    try {
      const novoCliente = await Client.create(req.body);

      const {
        id, name, surname, address1, address2, location, locationcp, phone, email,
      } = novoCliente;
      return res.json({
        id,
        name,
        surname,
        address1,
        address2,
        location,
        locationcp,
        phone,
        email,
      });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  }

  // Index
  async index(req, res) {
    try {
      const clients = await Client.findAll({ attributes: ['id', 'name', 'surname', 'address1', 'address2', 'location', 'locationcp', 'phone', 'email', 'email_verification', 'created_at'] });
      return res.json(clients);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      const {
        id, name, surname, address1, address2, location, locationcp, address1deliver,
        address2deliver, locationdeliver, locationcpdeliver, phone, email, email_verification,
      } = client;
      return res.json({
        id,
        name,
        surname,
        address1,
        address2,
        location,
        locationcp,
        address1deliver,
        address2deliver,
        locationdeliver,
        locationcpdeliver,
        phone,
        email,
        email_verification,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['Cliente não existe.'],
      });
    }
  }

  // Show Admin
  async showadmin(req, res) {
    try {
      const client = await Client.findOne({ where: { email: req.params.id } });

      const {
        id, name, surname, address1, address2, location, locationcp, address1deliver,
        address2deliver, locationdeliver, locationcpdeliver, phone, email,
        email_verification, created_at, updated_at,
      } = client;
      return res.json({
        id,
        name,
        surname,
        address1,
        address2,
        location,
        locationcp,
        address1deliver,
        address2deliver,
        locationdeliver,
        locationcpdeliver,
        phone,
        email,
        email_verification,
        created_at,
        updated_at,
      });
    } catch (e) {
      // return res.json(null);
      return res.status(400).json({
        errors: ['Cliente não existe.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não existe.'],
        });
      }

      const novosDados = await client.update(req.body);
      const {
        id, name, surname, address1, address2, location, locationcp, address1deliver,
        address2deliver, locationdeliver, locationcpdeliver, phone, email,
      } = novosDados;
      return res.json({
        id,
        name,
        surname,
        address1,
        address2,
        location,
        locationcp,
        address1deliver,
        address2deliver,
        locationdeliver,
        locationcpdeliver,
        phone,
        email,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não existe.'],
        });
      }

      await client.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.name });
    }
  }

  async checkMail(req, res) {
    const { email } = req.body;

    const client = await Client.findOne({ where: { email } });

    if (!client) {
      return res.json({ valid: false });
    }

    return res.json({
      valid: true,
      verification_code: client.verification_code,
      code_expired: client.code_expired,
      id: client.id,
    });
  }

  async validateMail(req, res) {
    const { codigo, email } = req.query;
    const client = await Client.findOne({ where: { email } });

    if (!client) {
      return res.json({ valid: false });
    }

    if (client.verification_code !== codigo) {
      return res.json({ valid: false });
    }

    try {
      await client.update({
        verification_code: '',
        email_verification: true,
      });
    } catch (err) {
      console.log(err);
    }

    return res.json({ valid: true });
  }

  async sendMail(req, res) {
    const { codigo, email } = req.query;
    const client = await Client.findOne({ where: { email } });
    try {
      await client.update({
        verification_code: codigo,
        email_verification: false,
      });
    } catch (err) {
      console.log(err);
    }

    const bodyMail = `Por favor, use o seguinte link para efectuar a <a href="${process.env.CLIENT_URL}/checkmail?email=${email}&codigo=${codigo}">Validação de email</a>.<br>`
    + '<p>Se não efectuou registo no site Loja Online, por ignore este mail.</p>'
    + '<p>Se tiver alguma questão ou sugestão, não hesite em entrar contato connosco através do e-mail <a href="mailto:plimsoftware@gmail.com">plimsoftware@gmail.com</a>.</p>';

    sendMailVerification(process.env.KEYSENDGRID, email, 'plimsoftware@gmail.com', 'Loja Online Validação de endereço de email', bodyMail);

    return res.json({ msg: 'Mail enviado' });
  }

  async sendMailPass(req, res) {
    const { codigo, email } = req.query;
    const client = await Client.findOne({ where: { email } });

    try {
      await client.update({
        code_expired: new Date(),
        verification_code: codigo,
      });
    } catch (err) {
      console.log(err);
    }

    const bodyMail = `Por favor, use o seguinte link para efectuar a <a href="${process.env.CLIENT_URL}/recoverpassword?email=${email}&codigo=${codigo}">Alteração de password</a>.<br>`
    + '<p>Se não solicitou a alteração de password, por ignore este mail.</p>'
    + '<p>Se tiver alguma questão ou sugestão, não hesite em entrar contato connosco através do e-mail <a href="mailto:plimsoftware@gmail.com">plimsoftware@gmail.com</a>.</p>';

    sendMailVerification(process.env.KEYSENDGRID, email, 'plimsoftware@gmail.com', 'Loja Online Recuperação de password', bodyMail);

    return res.json({ msg: 'Mail enviado' });
  }

  async changePass(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);

      await client.update(req.body);


      const bodyMail = 'A sua password foi alterada com sucesso.<br>'
    + '<p>Se não solicitou a alteração de password, por favor altere novamente a sua password.</p>'
    + '<p>Se tiver alguma questão ou sugestão, não hesite em entrar contato connosco através do e-mail <a href="mailto:plimsoftware@gmail.com">plimsoftware@gmail.com</a>.</p>';

      sendMailVerification(process.env.KEYSENDGRID, client.email, 'plimsoftware@gmail.com', 'Password alterada', bodyMail);
    } catch (err) {
      console.log(err);
    }
    return res.json({ msg: 'Mail enviado' });
  }
}


export default new ClientController();
