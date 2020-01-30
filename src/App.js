import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
import AuthPage from "./pages/authPage/authPage";
import NavBar from "./components/nav-bar/NavBar";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              user: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
