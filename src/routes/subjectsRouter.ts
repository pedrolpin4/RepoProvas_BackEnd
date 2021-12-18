import { Router } from 'express';
import getSubjectsExams from '../controllers/subjectsControllers';

const router = Router();

router.get('', getSubjectsExams);

export default router;
