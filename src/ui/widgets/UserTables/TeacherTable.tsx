import React from "react";
import Stack from "ui/atoms/Stack";
import { Typography } from "ui/atoms/Typography";

import { BookingsTableContainer, BookingsTableWrapper } from "./index.styled";

export const TeachersTable = (): JSX.Element => {
  return (
    <BookingsTableWrapper>
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
          {[1, 3, 4, 5]?.map((e, i) => (
            <tr key={i + e}>
              <td align="left">wedewdwe</td>
              <td>₦35,500.00</td>
              <td align="center">2</td>
              <td align="right">₦71,000.00</td>
              <td align="right">₦71,000.00</td>
              <td align="right">₦71,000.00</td>
              <td align="right">₦71,000.00</td>
            </tr>
          ))}
        </tbody>
      </BookingsTableContainer>
    </BookingsTableWrapper>
  );
};


