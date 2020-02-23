import React from "react";
import { AuthPageContainer } from "./authPage.styles";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const authPage = () => {
  return (
    <AuthPageContainer>
      <SignIn />
      <SignUp />
    </AuthPageContainer>
  );
};

export default authPage;
