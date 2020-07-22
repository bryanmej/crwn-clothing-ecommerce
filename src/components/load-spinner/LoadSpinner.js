import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./LoadSpinner.styles";

const LoadSpinner = (Component) => ({ isLoading, ...otherprops }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component {...otherprops} />
  );
};

export default LoadSpinner;
