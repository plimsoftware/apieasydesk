import { Router } from 'express';
import incidentController from '../controllers/IncidentController';
import loginRequired from '../middlewares/loginRequired';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', loginRequired, incidentController.index);
router.get('/:id', loginRequired, incidentController.show);
router.post('/', loginRequired, incidentController.store);
router.put('/:id', loginRequired, incidentController.update);
router.delete('/:id', loginRequiredAdmin, incidentController.delete);

export default router;
