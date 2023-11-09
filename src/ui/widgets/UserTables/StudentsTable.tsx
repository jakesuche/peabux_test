import React from "react";

import { Typography } from "ui/atoms/Typography";

import { TableContainer, TableWrapper } from "./index.styled";
import { FormDataProps } from "utils/schema";
import { filterUsers } from "utils/comon";

export const StudentTable = ({
  users,
}: {
  users: FormDataProps[];
}): JSX.Element => {
  return (
    <TableWrapper>
      {users?.length && filterUsers(users, "student")?.length > 0 ? (
        <TableContainer>
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
        </TableContainer>
      ) : (
        <Typography>Students list is empty</Typography>
      )}
    </TableWrapper>
  );
};
