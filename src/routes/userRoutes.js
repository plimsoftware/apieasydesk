import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', userController.index);
router.get('/:id', userController.show); // search by username or ?userid
router.post('/', loginRequiredAdmin, userController.store);
router.put('/changepassword/', loginRequired, userController.changepass);
router.put('/:id', loginRequiredAdmin, userController.update);
router.delete('/:id', loginRequiredAdmin, userController.delete);

export default router;
