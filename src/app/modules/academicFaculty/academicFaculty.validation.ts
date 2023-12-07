import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic Faculty must be string',
  }),
});

const UpdateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic Faculty must be string',
  }),
});

export const academicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  UpdateAcademicFacultyValidationSchema,
};
