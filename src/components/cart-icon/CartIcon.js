import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart-actions";
import { cartItemsCount } from "../../redux/cart/cart-selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
});

const mapStateToProps = state => ({ itemCount: cartItemsCount(state) });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
