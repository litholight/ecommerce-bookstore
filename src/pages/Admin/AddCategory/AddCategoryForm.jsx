import React from "react";
import CustomButton from "../../../components/custom-button/custom-button.component";

export default class AddCategoryForm extends React.Component {
  state = {
    category: "",
    error: ""
  };
  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.category) {
      this.setState(() => ({ error: "Please enter in a category" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit(this.state.category);
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <label className="text-muted">Name</label>
          <input
            type="text"
            placeholder="New Category"
            className="form-control"
            autoFocus
            value={this.state.category}
            onChange={this.onCategoryChange}
          />
          <CustomButton>Create Category</CustomButton>
        </form>
      </div>
    );
  }
}
