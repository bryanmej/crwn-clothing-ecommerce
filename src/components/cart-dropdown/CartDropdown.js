import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleHidden } from "../../redux/cart/cart-actions";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage
} from "./CartDropdown.styles";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>

    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleHidden());
      }}
    >
      Go To Checkout
    </Button>
  </CartDropDownContainer>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
