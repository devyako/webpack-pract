import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Users from "./containers/Users"; 
import asyncComponent from "./hoc/asyncComponent";


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Users</Link>
        </div>
        <Route path="/" exact component={Users} />
        <Route path="/pizza" component={Pizza} />
      </div>
    );
  }
}
