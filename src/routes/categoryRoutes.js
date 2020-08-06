import { Router } from 'express';
import categoryController from '../controllers/CategoryController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', loginRequired, categoryController.index);
router.get('/:id', loginRequired, categoryController.show);
router.post('/', loginRequiredAdmin, categoryController.store);
router.put('/:id', loginRequiredAdmin, categoryController.update);
router.delete('/:id', loginRequiredAdmin, categoryController.delete);

export default router;
