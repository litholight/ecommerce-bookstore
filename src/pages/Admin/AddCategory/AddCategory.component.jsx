import React from "react";
import Layout from "../../../components/Layout/Layout.component";
import { Link } from "react-router-dom";

const clickSubmit = e => {
  e.preventDefault();
};

const AddCategory = () => (
  <Layout title="Add a new category" description="Ready to add a new category?">
    <form onSubmit={clickSubmit}>
      <form action="" className="form-group">
        <label className="text-muted">Name</label>
        <input type="text" className="form-control" autofocus />
        <button className="primary">Create Category</button>
      </form>
    </form>
  </Layout>
);

export default AddCategory;
