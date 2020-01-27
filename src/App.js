import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shopPage/shopPage";
import AuthPage from "./pages/authPage/authPage";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
