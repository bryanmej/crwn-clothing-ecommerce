import React from "react";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopDataSelector } from "../../redux/shop/shop-selectors";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionOverview = ({ collection }) => (
  <div className="collections-overview">
    {collection.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: shopDataSelector
});

export default connect(mapStateToProps)(CollectionOverview);
