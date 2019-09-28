import React from "react";
import { connect } from "react-redux";
import Layout from "../../../components/Layout/Layout.component";
import { Link } from "react-router-dom";

import { addCategory } from "../../../redux/category/category.actions";

import AddCategoryForm from "./AddCategoryForm";

const AddCategory = ({ category, dispatch }) => {
  console.log(category, "from addcategory");
  return (
    <Layout
      title="Add a new category"
      description="Ready to add a new category?"
    >
      <AddCategoryForm
        onSubmit={category => {
          dispatch(addCategory(category));
        }}
      />
    </Layout>
  );
};

export default connect()(AddCategory);
