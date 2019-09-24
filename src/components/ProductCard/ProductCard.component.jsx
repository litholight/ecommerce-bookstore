import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import {
  ProductContainer,
  ProductImage,
  ProductItem,
  ProductCardHeader,
  ProductPrice
} from "./ProductCard.styles";
import CustomButton from "../custom-button/custom-button.component";

import { PCFStyles } from "./ProductCardFooter.styles";

const ProductCard = ({ product, addItem }) => {
  const { header, imageUrl, description, price } = product;
  return (
    <ProductContainer>
      <ProductCardHeader>{header}</ProductCardHeader>
      <ProductImage src={imageUrl} alt="" />
      <ProductItem>{description}</ProductItem>
      <ProductPrice>${price}</ProductPrice>
      <PCFStyles>
        <CustomButton>View Product</CustomButton>
        <CustomButton inverted={"inverted"} onClick={() => addItem(product)}>
          Add to Cart
        </CustomButton>
      </PCFStyles>
    </ProductContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
