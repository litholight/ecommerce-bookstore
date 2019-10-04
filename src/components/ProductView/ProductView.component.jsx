import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import Layout from "../Layout/Layout.component";

import ProductCard from "../ProductCard/ProductCard.component";
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
            <ProductCard product={productView} showViewProductButton={false} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections
});

export default connect(mapStateToProps)(ProductView);
