
import React from "react";
import { LayoutWrapper, MainBody } from "./index.styled";
const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {

  return (
    <LayoutWrapper>
      <MainBody>{children}</MainBody>
    </LayoutWrapper>
  );
};

export default Layout;
