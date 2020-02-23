import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectItemsTotal
} from "../../redux/cart/cart-selectors";
import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkoutPage.styles";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const sections = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      {sections.map((section, i) => (
        <HeaderBlock key={i}>
          <span>{section}</span>
        </HeaderBlock>
      ))}
    </CheckoutHeader>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <Total>
      <span>TOTAL: ${total}</span>
    </Total>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
