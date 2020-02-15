import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopDataSelector } from "../../redux/shop/shop-selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const shopPage = ({ shopData }) => {
  return (
    <div>
      {shopData.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: shopDataSelector
});

export default connect(mapStateToProps)(shopPage);
