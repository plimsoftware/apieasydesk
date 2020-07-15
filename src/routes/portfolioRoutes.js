// Route used for Portfolio
import { Router } from 'express';
import portfolioController from '../controllers/PortfolioController';


const router = new Router();


router.post('/sendmail', portfolioController.sendMail); // Sendgrid


export default router;
