import { Router } from 'express';
import stockController from '../controllers/StockController';

import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', stockController.index); // Lista stocks
router.get('/:id', stockController.show); // Lista stock
router.put('/:id', loginRequired, stockController.update); // Update stock

router.post('/', loginRequiredAdmin, stockController.store); // Cria stock
router.put('/admin/:id', loginRequiredAdmin, stockController.update); // Update stock
router.delete('/:id', loginRequiredAdmin, stockController.delete); // Apaga stock

export default router;
