import { Router } from 'express';
import orderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, orderController.index); // Lista Orders
router.delete('/:id', loginRequiredAdmin, orderController.delete); // Apaga Order
router.get('/admin/', loginRequiredAdmin, orderController.showadmin);
router.put('/admin/:id', loginRequiredAdmin, orderController.update); // Update Order

router.get('/client/:id', loginRequired, orderController.indexbyid); // Lista Orders
router.get('/:id', loginRequired, orderController.show); // Lista Order
router.post('/', loginRequired, orderController.store); // Cria Order
router.put('/:id', loginRequired, orderController.update); // Update Order


export default router;
