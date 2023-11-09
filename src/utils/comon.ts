import { FormDataProps } from "./schema";

const calculateAge = (dateOfBirth: string) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();

  return age;
};

export const validateDateOfBirth = (dob: string, type: string) => {
  const age = calculateAge(dob);

  if (type === "Teachers") {
    if (age < 21) {
      return "Teachers' age must not be less than 21!";
    } else {
      return true;
    }
  } else {
    if (age > 22) {
      return "Students' age must not be more than 22!";
    } else {
      return true;
    }
  }
};


export const allowOnlyNumber = (value: string, maxLength?: number) => {
  if (maxLength) {
    return value?.slice(0, maxLength);
  } else {
    return value?.replace(/[^0-9]/g, "");
  }
};

export const filterUsers = (users:FormDataProps[],type:'teacher'|'student') => {
    return users?.filter((user) => user.type === type);
}
