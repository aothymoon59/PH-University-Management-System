import express from 'express';
import { UserControllers } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { StudentValidations } from '../student/student.validation';

const router = express.Router();

// will call controller func
router.post(
  '/create-student',
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
