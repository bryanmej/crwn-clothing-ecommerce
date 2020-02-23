import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";
import {
  CollectionPageContainer,
  CollectionTitle,
  ItemContainer
} from "./collectionPage.styles";
import CollectionItem from "../../components/collection-item/CollectionItem";

const collectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <ItemContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(collectionPage);
