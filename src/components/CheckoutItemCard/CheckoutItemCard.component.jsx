import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import {
  ProductContainer,
  ProductImage,
  ProductItem,
  ProductCardHeader,
  ProductPrice
} from "./CheckoutItemCard.styles";
import CustomButton from "../custom-button/custom-button.component";

import { PCFStyles } from "./CheckoutItemCardFooter.styles";

const CheckoutItemCard = ({ product, addItem }) => {
  const { header, imageUrl, description, price, quantity, id } = product;
  return (
    <ProductContainer>
      <ProductCardHeader>{header}</ProductCardHeader>
      <ProductImage src={imageUrl} alt="" />
      <ProductItem>{description}</ProductItem>
      <ProductPrice>
        {quantity} x ${price}
      </ProductPrice>
      <PCFStyles>
        <CustomButton>
          <Link to={`/product/${id}`}>View Product</Link>
        </CustomButton>
        <CustomButton>Remove</CustomButton>
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
)(CheckoutItemCard);
