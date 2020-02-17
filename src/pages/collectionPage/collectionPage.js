import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

const collectionPage = ({ collection }) => {
  console.log(collection);
  return <h2>category page</h2>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(collectionPage);
