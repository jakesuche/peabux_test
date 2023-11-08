const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();

  return age;
};

export const validateDateOfBirth = (data) => {
  const age = calculateAge(data.dob);

  if (data.studentNumber && age > 22) {
    return "Students' age must not be more than 22!";
  } else if (data.teacherNumber && age < 21) {
    return "Teachers' age must not be less than 21!";
  } else {
   
    console.log(data);
  }
};
