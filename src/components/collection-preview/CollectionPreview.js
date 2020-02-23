import React from "react";
import {
  PreviewContainer,
  Title,
  ItemsContainer
} from "./CollectionPreview.styles";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <PreviewContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </ItemsContainer>
    </PreviewContainer>
  );
};

export default CollectionPreview;
