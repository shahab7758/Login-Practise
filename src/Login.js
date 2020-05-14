import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let logedIn = true;
    if (token == null) {
      logedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      logedIn,
    };
  }
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "A" && password === "B") {
      localStorage.setItem("token", "abc");
      this.setState({ logedIn: true });
    }
  };
  render() {
    if (this.state.logedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.onHandleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.onHandleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
