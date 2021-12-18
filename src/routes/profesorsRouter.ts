import { Router } from 'express';
import * as profesorsController from '../controllers/profesorsController';

const router = Router();

router.get('', profesorsController.getProfesorsExam);

export default router;
