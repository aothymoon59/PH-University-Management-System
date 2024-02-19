// import express, { NextFunction, Request, Response } from 'express';
// import { UserControllers } from './user.controller';
// import validateRequest from '../../middlewares/validateRequest';
// import { StudentValidations } from '../student/student.validation';
// import { facultyValidations } from '../Faculty/faculty.validation';
// import { createAdminValidationSchema } from '../Admin/admin.validation';
// import auth from '../../middlewares/auth';
// import { USER_ROLE } from './user.constant';
// import { userValidation } from './user.validation';
// import { upload } from '../../utils/sendImageToCloudinary';

// const router = express.Router();

// // will call controller func
// router.post(
//   '/create-student',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   upload.single('file'),
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body);
//     req.body = JSON.parse(req.body.data);
//     next();
//   },
//   validateRequest(StudentValidations.createStudentValidationSchema),
//   UserControllers.createStudent,
// );

// router.post(
//   '/create-faculty',
//   auth(USER_ROLE.admin),
//   validateRequest(facultyValidations.createFacultyValidationSchema),
//   UserControllers.createFaculty,
// );

// router.post(
//   '/create-admin',
//   // auth(USER_ROLE.admin),
//   validateRequest(createAdminValidationSchema),
//   UserControllers.createAdmin,
// );

// router.post(
//   '/change-status/:id',
//   auth('admin'),
//   validateRequest(userValidation.changeStatusValidationSchema),
//   UserControllers.changeStatus,
// );

// router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

// export const UserRoutes = router;

/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';
import { StudentValidations } from '../student/student.validation';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

router.post(
  '/change-status/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(userValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

router.get(
  '/me',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  UserControllers.getMe,
);

export const UserRoutes = router;
