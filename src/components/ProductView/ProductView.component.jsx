import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProductData } from "../../redux/products/products.selectors";

import Layout from "../Layout/Layout.component";
import CheckoutItemCard from "../CheckoutItemCard/CheckoutItemCard.component";

import "./ProductView.styles.scss";

const ProductView = props => {
  const productId = props.match.params.id;
  const productView = props.products[productId - 1];
  return (
    <div>
      <Layout title={productView.header} description="Product View">
        <div className="product-view-container">
          <h2>Book Information</h2>
          <hr />
          <div>
            <h2>{productView.header}</h2>
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProductData
});

export default connect(mapStateToProps)(ProductView);
