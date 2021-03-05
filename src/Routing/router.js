import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import history from "./history";
import Main from "../Main";
import Login from "./../login";
import Manager from "../manager";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
          <Router history={history}>
              <Route path="/" exact component={Login} />
              <Route path="/main" exact component={Main} />
              <Route path="/manager" exact component={Manager} />
          </Router>
        </Switch>
      </BrowserRouter>
    );
  }
}
