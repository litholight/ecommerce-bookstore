import React from "react";
import Layout from "../../components/Layout/Layout.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItemCard from "../../components/CheckoutItemCard/CheckoutItemCard.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ itemCount, cartItems }) => (
  <Layout
    title="Checkout page"
    description="Checkout here"
    className="container"
  >
    <div className="checkout-container">
      <h2>Your cart has {itemCount} items</h2>
      <hr />
      {cartItems.map(cartItem => (
        <CheckoutItemCard key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="payment">
        <div className="test-warning">
          <br />
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01-20 - CVV: 123
        </div>
        <br />
        <StripeCheckoutButton price={100} />
      </div>
    </div>
  </Layout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckoutPage);
