import { Router } from 'express';
import orderdetailsController from '../controllers/OrderdetailsController';
import loginRequired from '../middlewares/loginRequired';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, orderdetailsController.index); // Lista Orders
router.delete('/:id', loginRequiredAdmin, orderdetailsController.delete); // Apaga Order
router.get('/admin/:id', loginRequiredAdmin, orderdetailsController.show); // Lista Order
router.put('/admin/:id', loginRequiredAdmin, orderdetailsController.update); // Update Order
router.post('/admin/', loginRequiredAdmin, orderdetailsController.store); // Cria Order

router.get('/:id', loginRequired, orderdetailsController.show); // Lista Order
router.post('/', loginRequired, orderdetailsController.store); // Cria Order
router.put('/:id', loginRequired, orderdetailsController.update); // Update Order


export default router;
