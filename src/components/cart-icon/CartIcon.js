import React from "react";
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart-actions";
import { cartItemsCount } from "../../redux/cart/cart-selectors";
import { IconContainer, Icon, ItemCount } from "./CartIcon.styles";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <IconContainer onClick={toggleHidden}>
      <Icon />
      <ItemCount>{itemCount}</ItemCount>
    </IconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
});

const mapStateToProps = state => ({ itemCount: cartItemsCount(state) });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
