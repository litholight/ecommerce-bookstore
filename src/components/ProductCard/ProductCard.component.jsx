import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  ProductContainer,
  ProductItem,
  ProductCardHeader,
  ProductPrice
} from "./ProductCard.styles";
import ProductCardFooter from "./ProductCardFooter/ProductCardFooter";

const ProductCard = ({ header, imageUrl, description, price }) => (
  <ProductContainer>
    <ProductCardHeader>{header}</ProductCardHeader>
    <img src={imageUrl} alt="" />
    <ProductItem>{description}</ProductItem>
    <ProductPrice>${price}</ProductPrice>
    <ProductCardFooter />
  </ProductContainer>
);

export default ProductCard;
