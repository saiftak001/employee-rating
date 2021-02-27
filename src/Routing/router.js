import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Main from "../Main";
import Login from "./../login";
import Manager from "../manager";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/manager" exact component={Manager} />
        </Switch>
      </Router>
    );
  }
}
