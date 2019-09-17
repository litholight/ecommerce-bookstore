import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    height: 50px;
  }
`;

export const Branding = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 15px;
`;

export const MenuOption = styled.li`
  display: inline-block;
  padding: 10px;
  color: white;
  height: 100%;
  border: 1px dotted transparent;

  &:hover {
    border: 1px dotted white;
    border-radius: 5px;
  }

  a {
    color: white;
    text-decoration: none;
  }
  ${props =>
    props.isActive &&
    css`
      color: orange;
    `}
`;
