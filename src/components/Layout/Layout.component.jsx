import React from "react";
import { Jumbotron } from "./Layout.styles";

const Layout = ({
  title = "Title",
  description = "Description",
  children,
  className
}) => (
  <div>
    <Jumbotron>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </Jumbotron>
    <div className={className}>{children} </div>
  </div>
);

export default Layout;
