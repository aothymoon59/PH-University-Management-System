import { Request, Response } from 'express';
import { UserService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // data validation using zod
    // const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
