import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/homePage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
import AuthPage from "./pages/authPage/authPage";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.user ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dipatch) => ({
  setUser: (user) => dipatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
