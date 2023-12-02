import Joi from 'joi';

const useNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, { name: 'first name' })
    .messages({
      'string.pattern.base': '{#label} should start with a capital letter',
    }),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base': '{#label} should contain only letters',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: useNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.string(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'block').default('active').required(),
});

export default studentValidationSchema;
