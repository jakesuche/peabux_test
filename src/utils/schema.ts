
export const defaultValues: FormDataProps = {
  title: "",
  name: "",
  surname: "",
  dob: "",
  nationalId: "",
  teacherNumber: "",
  salary: "",
  studentNumber: "",
};


export type FormDataProps = {
  title: string;
  name: string;
  surname: string;
  dob: string;
  nationalId: string;
  teacherNumber: string;
  salary: string;
  studentNumber: string;
  type:'student' | 'teacher'
};

