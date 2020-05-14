import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/admin" component={Admin} />
    </BrowserRouter>
  );
}

export default App;
