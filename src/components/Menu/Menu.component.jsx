import React from "react";
import { Link, withRouter } from "react-router-dom";

import { MenuContainer, Branding, MenuOption } from "./Menu.styles";

const Menu = props => {
  const currentPath = props.history.location.pathname;
  const homePath = "/";
  const signinPath = "/signin";
  const signupPath = "/signup";
  return (
    <MenuContainer>
      <Branding to="/">Sophia's Bookstore</Branding>
      <nav>
        <ul>
          <Link to={homePath}>
            <MenuOption isActive={currentPath === homePath}>Home</MenuOption>
          </Link>
          <Link to={signinPath}>
            <MenuOption isActive={currentPath === signinPath}>
              Signin
            </MenuOption>
          </Link>
          <Link to={signupPath}>
            <MenuOption isActive={currentPath === signupPath}>
              Signup
            </MenuOption>
          </Link>
        </ul>
      </nav>
    </MenuContainer>
  );
};

export default withRouter(Menu);
