import { Router } from 'express';
import teamController from '../controllers/TeamController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', loginRequired, teamController.index);
router.get('/:id', loginRequired, teamController.show);
router.post('/', loginRequiredAdmin, teamController.store);
router.put('/:id', loginRequiredAdmin, teamController.update);
router.delete('/:id', loginRequiredAdmin, teamController.delete);

export default router;
