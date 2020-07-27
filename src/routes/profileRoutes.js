import { Router } from 'express';
import profileController from '../controllers/ProfileController';

import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();

router.get('/', profileController.index);
router.get('/:id', profileController.show);
router.post('/', loginRequiredAdmin, profileController.store);
router.put('/:id', loginRequiredAdmin, profileController.update);
router.delete('/:id', loginRequiredAdmin, profileController.delete);

export default router;
