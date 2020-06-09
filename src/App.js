import React from "react";
import logo from "./logo.svg";
import User from "./features/user";
import { Users } from "./features/users/Users";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
