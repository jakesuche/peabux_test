import React from "react";

import { Typography } from "ui/atoms/Typography";

import { BookingsTableContainer, BookingsTableWrapper } from "./index.styled";
import { FormDataProps } from "utils/schema";
import { filterUsers } from "utils/comon";

export const StudentTable = ({users}:{users:FormDataProps[]}): JSX.Element => {
  return (
    <BookingsTableWrapper>
      {users?.length && filterUsers(users, "student")?.length > 0 ? (
        <BookingsTableContainer>
          <thead>
            <tr>
              <th>National ID </th>
              <th>Name</th>
              <th>Surname</th>
              <th>Date of Birth</th>
              <th>Student Number</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers(users, "student")?.map((e, i) => (
              <tr key={e.studentNumber}>
                <td>{e.nationalId}</td>
                <td>{e.name}</td>
                <td>{e.surname}</td>

                <td>{e.dob}</td>
                <td>{e.studentNumber}</td>
              </tr>
            ))}
          </tbody>
        </BookingsTableContainer>
      ) : (
        <Typography>Students list is empty</Typography>
      )}
    </BookingsTableWrapper>
  );
};


