import React from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionSnapshot,
} from "../../firebase/firebase-utils";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import collectionPage from "../collectionPage/collectionPage";

class shopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionSnapshot(snapshot);
    });
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

export default shopPage;
