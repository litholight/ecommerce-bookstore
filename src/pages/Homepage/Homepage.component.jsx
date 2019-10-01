import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  firestore,
  convertProductsSnapshotToMap
} from "../../firebase/firebase.utils";

import { selectProductData } from "../../redux/products/products.selectors";

import Layout from "../../components/Layout/Layout.component";
import NewArrivals from "../NewArrivals/NewArrivals.component";

class Homepage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("products");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertProductsSnapshotToMap(snapshot);
      console.log(collectionsMap);
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <Layout title="Sophia's Bookstore" description="Live Demonstration">
          <NewArrivals products={products} />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  products: selectProductData
});

export default connect(mapStateToProps)(Homepage);
