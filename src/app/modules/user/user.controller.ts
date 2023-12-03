import { Request, Response } from 'express';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    // const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error,
    //   });
    // }
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const UserControllers = {
  createStudent,
};
