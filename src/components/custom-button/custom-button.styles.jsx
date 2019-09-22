import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: orange;
  color: white;
  border: 1px solid black;
  display: inline-block;
  margin: 5px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: hidden;
  }
`;

const googleSignInStyles = css`
  background-color: #02a9f4;
  color: white;

  &:hover {
    background-color: #2da7df;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 20px;
  width: auto;
  height: 30px;
  letter-spacing: 0.5px;
  line-height: 30px;
  padding: 0 10px 0 10px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  ${getButtonStyles}
`;
