import { Router } from 'express';
import categoryController from '../controllers/CategoryController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', categoryController.index);
router.get('/:id', categoryController.show);
router.post('/', loginRequiredAdmin, categoryController.store);
router.put('/:id', loginRequiredAdmin, categoryController.update);
router.delete('/:id', loginRequiredAdmin, categoryController.delete);

export default router;
