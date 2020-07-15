import { Router } from 'express';
import clientController from '../controllers/ClientController';
import loginRequired from '../middlewares/loginRequired';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, clientController.index); // Lista Clientes
router.get('/admin/:id', loginRequiredAdmin, clientController.showadmin); // Lista Cliente
router.delete('/admin/:id', loginRequiredAdmin, clientController.delete); // Apaga cliente

router.get('/:id', loginRequired, clientController.show); // Lista Cliente
router.post('/', clientController.store); // Cria cliente
router.post('/checkmail', clientController.checkMail);
router.post('/sendmail', clientController.sendMail); // Sendgrid
router.post('/sendmailpass', clientController.sendMailPass); // Sendgrid
router.post('/validatemail', clientController.validateMail);
router.post('/changepass/:id', clientController.changePass);
router.put('/:id', loginRequired, clientController.update); // Update cliente
router.delete('/:id', loginRequired, clientController.delete); // Apaga cliente

export default router;
