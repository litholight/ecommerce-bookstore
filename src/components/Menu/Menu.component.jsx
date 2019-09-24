import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { isAdmin } from "../../utils/utils";

import {
  MenuContainer,
  Branding,
  MenuOption,
  MenuOptionDiv
} from "./Menu.styles";

const Menu = props => {
  const hidden = props.hidden;
  const currentPath = props.history.location.pathname;
  const homePath = "/";
  const signinPath = "/signin";
  const signupPath = "/signup";
  const currentUser = props.currentUser;
  const dashboardPath =
    currentUser && currentUser.role && isAdmin(currentUser.role);

  return (
    <MenuContainer>
      <Branding to="/">Ecommerce Portal - Stoneburner Software, LLC</Branding>
      <nav>
        <ul>
          <MenuOption to={homePath} isActive={currentPath === homePath}>
            Home
          </MenuOption>
          {currentUser ? (
            <React.Fragment>
              <MenuOption
                to={dashboardPath}
                isActive={currentPath === dashboardPath}
              >
                Dashboard
              </MenuOption>
              <MenuOptionDiv onClick={() => auth.signOut()}>
                Sign Out
              </MenuOptionDiv>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <MenuOption to={signinPath} isActive={currentPath === signinPath}>
                Sign in
              </MenuOption>
              <MenuOption to={signupPath} isActive={currentPath === signupPath}>
                Sign up
              </MenuOption>
            </React.Fragment>
          )}
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </ul>
      </nav>
    </MenuContainer>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default withRouter(connect(mapStateToProps)(Menu));
