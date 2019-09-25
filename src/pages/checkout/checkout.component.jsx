import React from "react";
import Layout from "../../components/Layout/Layout.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CartItemCard from "../../components/CartItemCard/CartItemCard.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ itemCount, cartItems }) => (
  <Layout
    title="Checkout page"
    description="Checkout here"
    className="container"
  >
    <div>
      <h2>Your cart has {itemCount} items</h2>
      <hr />
      {cartItems.map(product => (
        <CartItemCard key={product.id} product={product} />
      ))}
    </div>
  </Layout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckoutPage);
