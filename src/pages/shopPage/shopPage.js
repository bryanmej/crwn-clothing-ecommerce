import React from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionSnapshot,
} from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import collectionPage from "../collectionPage/collectionPage";

class shopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshot(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={collectionPage} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(shopPage);
