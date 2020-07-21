import { Router } from 'express';
import companyController from '../controllers/CompanyController';
import loginRequiredAdmin from '../middlewares/loginRequiredAdmin';

const router = new Router();


router.get('/', companyController.index);
router.get('/:id', companyController.show);
router.post('/', loginRequiredAdmin, companyController.store);
router.put('/:id', loginRequiredAdmin, companyController.update);
router.delete('/:id', loginRequiredAdmin, companyController.delete);

export default router;
