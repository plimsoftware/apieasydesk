import { Router } from 'express';
import clientController from '../controllers/ClientController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, clientController.index); // Lista Clientes
// router.get('/admin/:id', loginRequiredAdmin, clientController.showadmin); // Lista Cliente
// router.delete('/admin/:id', loginRequiredAdmin, clientController.delete); // Apaga cliente


// router.post('/', clientController.store); // Cria cliente
// router.put('/:id', loginRequiredAdmin, clientController.update); // Update cliente
// router.delete('/:id', loginRequiredAdmin, clientController.delete); // Apaga cliente

export default router;
