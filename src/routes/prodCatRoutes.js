import { Router } from 'express';
import prodCatController from '../controllers/ProdCatController';

import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();

router.get('/', prodCatController.index); // Lista categorias do produto
router.get('/:id', loginRequiredAdmin, prodCatController.show); // Lista categoria do produto
router.post('/', loginRequiredAdmin, prodCatController.store); // Cria categoria do produto
router.put('/:id', loginRequiredAdmin, prodCatController.update); // Update categoria do produto
router.delete('/:id', loginRequiredAdmin, prodCatController.delete); // Apaga categoria do produto

export default router;
