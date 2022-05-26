import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import Home from "./Home";
import HikeSearchForm from "./HikeSearchForm";
import AddHikeForm from "./AddHikeForm";
import HikeShow from "./HikeShow";
import MyHikesList from "./MyHikesList";
import HikesList from "./HikesList";
import MapTile from "./MapTile";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <h2 className="home-page-body">Let's go Splorin!</h2>
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/find-a-hike" component={HikeSearchForm} />
        <Route exact path="/add-a-hike">
          <AddHikeForm user={currentUser} />
        </Route>
        <Route exact path="/hikes" component={HikesList} />
        <Route exact path="/hikes/:id" component={HikeShow} />
        <Route exact path="/my-hikes" component={MyHikesList} />
      </Switch>
    </Router>
  );
};

export default hot(App);
