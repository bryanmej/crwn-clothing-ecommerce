import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  MenuImage,
  MenuContent,
  Title,
  SubTitle
} from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <MenuImage className="background-image" imageUrl={imageUrl} />
      <MenuContent className="content">
        <Title>{title}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
