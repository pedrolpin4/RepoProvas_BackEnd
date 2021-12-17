import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const router = Router();

router.get('', examsController.getExamsInfo);
router.post('', examsController.postExam);

export default router;
