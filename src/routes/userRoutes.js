import { Router } from 'express';
import userController from '../controllers/UserController';
// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', userController.index); // TEMPORARIO SEM LOGINREQUIRED
router.get('/:id', userController.show); // TEMPORARIO SEM LOGINREQUIRED
router.post('/', userController.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
router.delete('/:id', userController.delete); // TEMPORARIO SEM LOGINREQUIRED

export default router;
