import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import {
  MenuContainer,
  Branding,
  MenuOption,
  MenuOptionDiv
} from "./Menu.styles";

const Menu = props => {
  const currentPath = props.history.location.pathname;
  const homePath = "/";
  const dashboardPath = "/dashboard";
  const signinPath = "/signin";
  const signupPath = "/signup";
  let currentUser = props.currentUser;
  return (
    <MenuContainer>
      <Branding to="/">Sophia's Bookstore</Branding>
      <nav>
        <ul>
          <MenuOption to={homePath} isActive={currentPath === homePath}>
            Home
          </MenuOption>

          {currentUser ? (
            <div>
              <MenuOption
                to={dashboardPath}
                isActive={currentPath === dashboardPath}
              >
                Dashboard
              </MenuOption>
              <MenuOptionDiv onClick={() => auth.signOut()}>
                Sign Out
              </MenuOptionDiv>
            </div>
          ) : (
            <div>
              <MenuOption to={signinPath} isActive={currentPath === signinPath}>
                Sign in
              </MenuOption>
              <MenuOption to={signupPath} isActive={currentPath === signupPath}>
                Sign up
              </MenuOption>
            </div>
          )}
        </ul>
      </nav>
    </MenuContainer>
  );
};

export default withRouter(Menu);
