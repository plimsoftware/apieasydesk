import { Router } from 'express';
// import homeController from '../controllers/HomeController';
import productController from '../controllers/ProductController';

const router = new Router();

// router.get('/', homeController.index);
router.get('/', productController.index); // Lista produtos

export default router;
