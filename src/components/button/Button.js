import React from "react";
import "./button.styles.scss";

const Button = ({ children, ...buttonProps }) => {
  return (
    <button className="custom-button" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
