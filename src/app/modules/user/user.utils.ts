import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

// year semester code and 4 digit number
export const generateStudentId = (payLoad: TAcademicSemester) => {
  // first time 0000
  const currentId = (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return incrementId;
};
