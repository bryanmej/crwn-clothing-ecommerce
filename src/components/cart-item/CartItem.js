import React from "react";
import { CartItemContainer, Details } from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} width="30%" alt="cart item" />
      <Details>
        <span>{`${name}`}</span>
        <span>{`${quantity} X ${price}`}</span>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
