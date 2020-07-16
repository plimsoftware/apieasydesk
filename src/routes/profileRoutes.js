import { Router } from 'express';
import profileController from '../controllers/ProfileController';

// import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();

router.get('/', profileController.index);
router.get('/:id', profileController.show);
router.post('/', profileController.store); // TEMP without login
router.put('/:id', profileController.update); // TEMP without login
router.delete('/:id', profileController.delete); // TEMP without login

export default router;
