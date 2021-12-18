import { Router } from 'express';
import getProfesorsExams from '../controllers/profesorsController';

const router = Router();

router.get('', getProfesorsExams);

export default router;
