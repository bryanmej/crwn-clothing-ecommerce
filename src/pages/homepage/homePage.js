import React from "react";
import { HomePageContainer } from "./homePage.styles";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu";

const HomePage = () => (
  <HomePageContainer>
    <DirectoryMenu />
  </HomePageContainer>
);

export default HomePage;
