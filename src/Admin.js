import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let logedIn = true;
    if (token == null) {
      logedIn = false;
    }
    this.state = { logedIn };
  }
  render() {
    if (this.state.logedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Admin Page</h1>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}
