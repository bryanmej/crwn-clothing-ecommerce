import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase-utils";
import { SignInContainer, SignInTitle, ButtonContainer } from "./SignIn.styles";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <ButtonContainer>
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
