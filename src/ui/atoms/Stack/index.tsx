import React from "react";

import { StackContainer, StackProps } from "./index.style";

const Stack: React.FC<StackProps> = ({
  spacing = 8,
  direction = "column",
  alignitems = "flex-start",
  justifycontent = "flex-start",
  sm,
  md,
  lg,
  xl,
  children,
  ...res
}) => {
  return (
    <StackContainer
      {...res}
      spacing={spacing}
      direction={direction}
      alignitems={alignitems}
      justifycontent={justifycontent}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </StackContainer>
  );
};

export default Stack;
