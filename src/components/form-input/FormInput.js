import React from "react";
import { GroupContainer, StyledInput, FormLabel } from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <StyledInput onChange={handleChange} {...otherProps} />
      {label ? (
        <FormLabel className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </FormLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
