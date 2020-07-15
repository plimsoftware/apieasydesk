import { Router } from 'express';
import productController from '../controllers/ProductController';

import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();

router.get('/', productController.index); // Lista produtos
router.get('/:id', productController.show); // Lista produto
router.post('/', loginRequiredAdmin, productController.store); // Cria produto
router.put('/:id', loginRequiredAdmin, productController.update); // Update produto
router.delete('/:id', loginRequiredAdmin, productController.delete); // Apaga produto

export default router;
