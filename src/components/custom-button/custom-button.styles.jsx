import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: orange;
  color: white;
  display: inline-block;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid lightgrey;
  }
`;

const invertedButtonStyles = css`
  background-color: #02a9f4;
  color: white;
  display: inline-block;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid lightgrey;
  }
`;

const googleSignInStyles = css`
  background-color: #02a9f4;
  color: white;

  &:hover {
    background-color: white;
    color: black;
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
  margin: 5px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  flex-grow: 1;

  ${getButtonStyles}
`;
