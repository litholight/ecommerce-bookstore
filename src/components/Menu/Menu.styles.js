import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2da7df;
  font-weight: bold;

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
  padding: 10px;
  color: white;
  border: 1px dotted transparent;
  text-decoration: none;
  :last-child {
    margin-right: 30px;
  }

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

export const MenuOptionDiv = styled.div`
  padding: 10px;
  color: white;
  border: 1px dotted transparent;
  cursor: pointer;
  text-decoration: none;
  margin-right: 30px;

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
