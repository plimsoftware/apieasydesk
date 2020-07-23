import { Router } from 'express';
import teammemberController from '../controllers/TeammembersController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', teammemberController.index);
router.get('/:id', teammemberController.show);
router.post('/', loginRequiredAdmin, teammemberController.store);
router.put('/:id', loginRequiredAdmin, teammemberController.update);
router.delete('/:id', loginRequiredAdmin, teammemberController.delete);

export default router;
