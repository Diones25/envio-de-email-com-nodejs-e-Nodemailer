import { Router } from 'express';
import { EmptyResultError } from 'sequelize/types';
import * as emailController from '../controllers/emailController'
const router = Router();

router.post('/contato', emailController.contato);

export default router;