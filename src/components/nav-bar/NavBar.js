import React from "react";
import "./nav-bar.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-utils";
import CartDropdown from "../cart-dropdown/CartDropdown";

const NavBar = ({ user, cart }) => {
  console.log(cart);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {user.user ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/auth">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cart.hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
});

export default connect(mapStateToProps)(NavBar);
