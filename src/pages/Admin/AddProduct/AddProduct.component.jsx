import React from "react";
import Layout from "../../../components/Layout/Layout.component";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const AddProduct = props => {
  console.log(props, "in AddProduct");
  return (
    <Layout title="Add a new product" description="Ready to add a new product?">
      {JSON.stringify(props.category)}
    </Layout>
  );
};
const mapStateToProps = state => ({
  category: state.category
});

export default connect(mapStateToProps)(AddProduct);
