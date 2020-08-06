import { Router } from 'express';
import companyController from '../controllers/CompanyController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();


router.get('/', loginRequired, companyController.index);
router.get('/:id', loginRequired, companyController.show);
router.post('/', loginRequiredAdmin, companyController.store);
router.put('/:id', loginRequiredAdmin, companyController.update);
router.delete('/:id', loginRequiredAdmin, companyController.delete);

export default router;
