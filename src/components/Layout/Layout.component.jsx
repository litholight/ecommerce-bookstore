import React from "react";
import { Jumbotron, ChildContainer } from "./Layout.styles";

const Layout = ({ title = "Title", description = "Description", children }) => (
  <div>
    <Jumbotron>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </Jumbotron>
    <ChildContainer>{children}</ChildContainer>
  </div>
);

export default Layout;
