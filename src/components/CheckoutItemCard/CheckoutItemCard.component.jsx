import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addItem, clearItemFromCart } from "../../redux/cart/cart.actions";
import {
  ProductContainer,
  ProductImage,
  ProductItem,
  ProductCardHeader,
  ProductPrice
} from "./CheckoutItemCard.styles";
import CustomButton from "../custom-button/custom-button.component";

import { PCFStyles } from "./CheckoutItemCardFooter.styles";

const CheckoutItemCard = ({ cartItem, clearItem }) => {
  const { header, imageUrl, description, price, quantity, id } = cartItem;
  return (
    <ProductContainer>
      <ProductCardHeader>{header}</ProductCardHeader>
      <ProductImage src={imageUrl} alt="" />
      <ProductItem>{description}</ProductItem>
      <ProductPrice>
        {quantity} x ${price}
      </ProductPrice>
      <PCFStyles>
        <Link to={`/product/${id}`}>
          <CustomButton>View Product</CustomButton>
        </Link>
        <CustomButton onClick={() => clearItem(cartItem)}>Remove</CustomButton>
      </PCFStyles>
    </ProductContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearItemFromCart(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItemCard);
