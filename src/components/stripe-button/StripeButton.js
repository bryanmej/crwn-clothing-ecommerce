import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = "pk_test_F14Q68FTZoj5YoWSFbUGdioj0056Fa2gTT";
  const onToken = token => {
    console.log(token);
    alert("success");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="crown-clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your price is ${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;
