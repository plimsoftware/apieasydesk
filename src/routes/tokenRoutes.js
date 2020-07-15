import { Router } from 'express';
import tokenController from '../controllers/TokenController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', tokenController.store);
router.post('/checkpass/', loginRequired, tokenController.checkPass);

export default router;
