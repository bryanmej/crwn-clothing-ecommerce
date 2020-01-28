import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...buttonProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : null} custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
