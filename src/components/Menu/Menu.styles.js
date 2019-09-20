import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2da7df;

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

export const MenuOption = styled(Link)`
  display: inline-block;
  padding: 10px;
  color: white;
  height: 100%;
  border: 1px dotted transparent;
  text-decoration: none;

  &:hover {
    border: 1px dotted white;
    border-radius: 5px;
  }

  a {
    color: white;
  }
  ${props =>
    props.isActive &&
    css`
      color: orange;
    `}
`;

export const MenuOptionDiv = styled.div`
  padding: 10px;
  color: white;
  height: 100%;
  border: 1px dotted transparent;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px dotted white;
    border-radius: 5px;
  }

  ${props =>
    props.isActive &&
    css`
      color: orange;
    `}
`;
