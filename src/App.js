import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user-actions";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
import AuthPage from "./pages/authPage/authPage";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.props.setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.user.user ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dipatch => ({
  setUser: user => dipatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
