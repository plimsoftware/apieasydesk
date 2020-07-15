import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequiredAdmin, userController.index); // Lista Users
// router.get('/:id', loginRequiredAdmin, userController.show); // Lista User
router.post('/', userController.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
// router.delete('/:id', loginRequiredAdmin, userController.delete); // Apaga user

export default router;
