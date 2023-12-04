/* eslint-disable no-undef */
import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';

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
    sendResponse(res, {
      statusCode: httpStatus.OK,
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
