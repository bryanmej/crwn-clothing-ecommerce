import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {console.log(cartItems)}
    <div className="cart-items" />
    {cartItems.map(item => (
      <CartItem key={item.id} item={item} />
    ))}
    <Button>Go To Checkout</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps)(CartDropdown);
