import React from "react";
import Stack from "ui/atoms/Stack";
import { Typography } from "ui/atoms/Typography";

import { BookingsTableContainer, BookingsTableWrapper } from "./index.styled";

export const StudentTable = (): JSX.Element => {
  return (
    <BookingsTableWrapper>
      <BookingsTableContainer>
        <thead>
          <tr>
            <th >National ID </th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Student Number</th>
          </tr>
        </thead>
        <tbody>
          {[1, 3, 4, 5]?.map((e, i) => (
            <tr key={i + e}>
              <td >dewdw</td>
              <td>₦35,500.00</td>
              <td>₦35,500.00</td>
         
              <td>2</td>
              <td >₦71,000.00</td>
            </tr>
          ))}
        </tbody>
      </BookingsTableContainer>
    </BookingsTableWrapper>
  );
};


