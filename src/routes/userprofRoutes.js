import { Router } from 'express';
import userprofController from '../controllers/UserProfController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, userprofController.index);
router.get('/:id', loginRequiredAdmin, userprofController.show);
router.post('/', loginRequiredAdmin, userprofController.store);
router.put('/:id', loginRequiredAdmin, userprofController.update);
router.delete('/:id', loginRequiredAdmin, userprofController.delete);

export default router;
