import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { selectCollections } from "../../redux/shop/shop.selectors";

import Layout from "../../components/Layout/Layout.component";
import NewArrivals from "../NewArrivals/NewArrivals.component";
import { updateCollections } from "../../redux/shop/shop.actions";

class Homepage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { collections } = this.props;
    console.log(collections, "from homepage");
    return (
      <div>
        <Layout title="Sophia's Bookstore" description="Live Demonstration">
          <NewArrivals products={collections} />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
