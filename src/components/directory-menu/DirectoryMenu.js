import React from "react";
import "./directory-menu-styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { menuSelector } from "../../redux/directory/directory-selectors";
import MenuItem from "../menu-item/menu-item";

const DirectoryMenu = ({ menu }) => {
  return (
    <div className="directory-menu">
      {menu.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: menuSelector
});

export default connect(mapStateToProps)(DirectoryMenu);
