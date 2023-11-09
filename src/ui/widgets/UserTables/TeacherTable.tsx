import React from "react";
import Stack from "ui/atoms/Stack";
import { Typography } from "ui/atoms/Typography";

import { BookingsTableContainer, BookingsTableWrapper } from "./index.styled";
import { FormDataProps } from "utils/schema";
import { filterUsers } from "utils/comon";

export const TeachersTable = ({users}:{users:FormDataProps[]}): JSX.Element => {
  return (
    <BookingsTableWrapper>
      {users?.length && filterUsers(users,'teacher').length > 0 ? (
        <BookingsTableContainer>
          <thead>
            <tr>
              <th align="left">National ID </th>
              <th>Title</th>
              <th align="center">Name</th>
              <th align="right">Surname</th>
              <th align="right">Date of Birth</th>
              <th align="right">Teacher Number</th>
              <th align="right">Salary</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers(users,'teacher')?.map((e, i) => (
              <tr key={e.studentNumber}>
                <td align="left">{e.nationalId}</td>
                <td>{e.title}</td>
                <td align="center">{e.name}</td>
                <td align="right">{e.surname}</td>
                <td align="right">{e.dob}</td>
                <td align="right">{e.teacherNumber}</td>
                <td align="right">{e.salary || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </BookingsTableContainer>
      ) : (
        <Typography>Teachers list is empty</Typography>
      )}
    </BookingsTableWrapper>
  );
};


