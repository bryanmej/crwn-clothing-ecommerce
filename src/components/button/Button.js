import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...buttonProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
