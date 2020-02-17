import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import collectionPage from "../collectionPage/collectionPage";

const shopPage = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={collectionPage} />
    </>
  );
};

export default shopPage;
