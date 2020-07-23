import { Router } from 'express';
import teamController from '../controllers/TeamController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', teamController.index);
router.get('/:id', teamController.show);
router.post('/', loginRequiredAdmin, teamController.store);
router.put('/:id', loginRequiredAdmin, teamController.update);
router.delete('/:id', loginRequiredAdmin, teamController.delete);

export default router;
