import { Router } from 'express';
import clientController from '../controllers/ClientController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', loginRequired, clientController.index);
router.post('/', loginRequired, clientController.store);
router.get('/:id', loginRequired, clientController.show);
router.put('/:id', loginRequired, clientController.update);
router.delete('/:id', loginRequiredAdmin, clientController.delete);

export default router;
