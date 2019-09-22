import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, inverted, ...props }) => (
  <CustomButtonContainer inverted={inverted} {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
