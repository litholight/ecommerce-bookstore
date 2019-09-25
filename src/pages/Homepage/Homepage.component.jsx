import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProductData } from "../../redux/products/products.selectors";

import Layout from "../../components/Layout/Layout.component";
import NewArrivals from "../NewArrivals/NewArrivals.component";

const Homepage = ({ products }) => {
  return (
    <div>
      <Layout title="Sophia's Bookstore" description="Live Demonstration">
        <NewArrivals products={products} />
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProductData
});

export default connect(mapStateToProps)(Homepage);
