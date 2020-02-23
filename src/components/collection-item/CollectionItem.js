import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import {
  ItemContainer,
  ItemImage,
  ItemFooter,
  ItemButton,
  ItemName,
  ItemPrice
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <ItemContainer>
      <ItemImage imageUrl={imageUrl} />
      <ItemFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </ItemFooter>

      <ItemButton onClick={() => addItem(item)} inverted>
        Add to cart
      </ItemButton>
    </ItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
