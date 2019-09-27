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
} from "./ProductCard.styles";
import CustomButton from "../custom-button/custom-button.component";

import { PCFStyles } from "./ProductCardFooter.styles";

const ProductCard = ({ product, addItem, showViewProductButton = true }) => {
  const { header, imageUrl, description, price, id } = product;
  const showViewButton = showViewProductButton => {
    return showViewProductButton && <CustomButton>View Product</CustomButton>;
  };
  return (
    <ProductContainer>
      <ProductCardHeader>{header}</ProductCardHeader>
      <ProductImage src={imageUrl} alt="" />
      <ProductItem>{description}</ProductItem>
      <ProductPrice>${price}</ProductPrice>
      <PCFStyles>
        <Link to={`/product/${id}`}>
          {showViewButton(showViewProductButton)}
        </Link>
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
