import React, { useState } from "react";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase-utils";
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
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
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
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
