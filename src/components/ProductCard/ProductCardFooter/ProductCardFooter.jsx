import React from "react";
import CustomButton from "../../custom-button/custom-button.component";

import { PCFStyles } from "./ProductCardFooter.styles";

const ProductCardFooter = () => (
  <PCFStyles>
    <CustomButton>View Product</CustomButton>
    <CustomButton>Add to Cart</CustomButton>
  </PCFStyles>
);

export default ProductCardFooter;
