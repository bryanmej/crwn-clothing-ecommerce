import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { menuSelector } from "../../redux/directory/directory-selectors";
import { DirectoryContainer } from "./DirectoryMenu.styles";
import MenuItem from "../menu-item/MenuItem";

const DirectoryMenu = ({ menu }) => {
  return (
    <DirectoryContainer>
      {menu.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: menuSelector
});

export default connect(mapStateToProps)(DirectoryMenu);
