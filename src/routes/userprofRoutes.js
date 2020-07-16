import { Router } from 'express';
import userprofController from '../controllers/UserProfController';
// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', userprofController.index); // TEMPORARIO SEM LOGINREQUIRED
// router.get('/:id', loginRequiredAdmin, userController.show); // Lista User
// router.post('/', userprofController.store); // Cria user TEMPORARIO SEM LOGINREQUIRED
// router.put('/:id', loginRequiredAdmin, userController.update); // Update user
// router.delete('/:id', loginRequiredAdmin, userController.delete); // Apaga user

export default router;
