import React from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const shopPage = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default shopPage;
