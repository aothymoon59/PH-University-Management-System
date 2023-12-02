import { z } from 'zod';

const UserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string(),
  lastName: z.string().refine((value) => /^[a-zA-Z]+$/.test(value), {
    message: 'Last name should contain only letters',
  }),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const StudentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string(),
  isActive: z.enum(['active', 'block']).default('active'),
  isDeleted: z.boolean(),
});

export default StudentValidationSchema;
