import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', userController.index); // Lista Users
router.get('/:id', userController.show); // Lista User
router.post('/', userController.store); // Cria user
router.put('/:id', loginRequired, userController.update); // Update user
router.delete('/:id', loginRequired, userController.delete); // Apaga user

export default router;
