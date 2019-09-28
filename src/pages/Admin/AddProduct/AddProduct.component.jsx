import React from "react";
import Layout from "../../../components/Layout/Layout.component";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const AddProduct = props => {
  const { category } = props.category;
  console.log(category, "in AddProduct");
  return (
    <Layout title="Add a new product" description="Ready to add a new product?">
      <form>
        <p>Select a category: </p>
        <select>
          {category.map(catOption => (
            <option key="catOption">{catOption}</option>
          ))}
        </select>
      </form>
    </Layout>
  );
};
const mapStateToProps = state => ({
  category: state.category
});

export default connect(mapStateToProps)(AddProduct);
