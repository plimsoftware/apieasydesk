import { Router } from 'express';
import incidentHistController from '../controllers/IncidentHistController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', loginRequired, incidentHistController.index);
router.get('/:id', loginRequired, incidentHistController.show); // id is incid
router.post('/', loginRequired, incidentHistController.store);

export default router;
