import { Router } from 'express';
import * as emailController from '../controllers/emailController'
const router = Router();

router.post('/contato', emailController.contato);

export default router;