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
      <p>{description}</p>
    </Jumbotron>
    <div className={className}>{children} </div>
  </div>
);

export default Layout;
