import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPreviewCollection } from "../../redux/shop/shop-selectors";
import { OverviewContainer } from "./CollectionOverview.styles";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionOverview = ({ collection }) => (
  <OverviewContainer>
    {collection.map(({ id, ...otherProps }, i) => (
      <CollectionPreview key={i} {...otherProps} />
    ))}
  </OverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collection: selectPreviewCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
