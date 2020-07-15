import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();

router.post('/', loginRequiredAdmin, photoController.store);
router.post('/:id', loginRequiredAdmin, photoController.initial);
router.delete('/:id', loginRequiredAdmin, photoController.delete);

export default router;
