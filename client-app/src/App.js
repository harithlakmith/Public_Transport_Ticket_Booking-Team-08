import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Add_Route from "./component/add_route/Add_Route";
import Find_Bus from "./component/find_bus/Find_Bus";
import Test_case from "./component/Test_case/Test_case";
import Bus_List from "./component/Bus_List/Bus_List";
import Admin_Dash from "./component/admin_dash/Admin_Dash";
import Bus_Reg from "./component/bus_reg/Bus_Reg";
import Select_Route from "./component/select_route/Select_Route";
import Session_Pass from "./component/session_pass/Session_Pass";
import Update_Bus from "./component/update_bus/Update_Bus";

function App() {
  return (
    <div class="container">
      <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
          <img src="./logo.png" height="58" alt="CoolBrand" />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a href="/home" class="nav-item nav-link active">
              Home
            </a>
            <a href="/add-route" class="nav-item nav-link">
              Add Route
            </a>
          </div>
          <div class="navbar-nav ml-auto">
            <a href="#" class="nav-item nav-link">
              Passenger Login
            </a>
            <a href="#" class="nav-item nav-link">
              Admin Login
            </a>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Switch>
          <Route path="/add-route">
            <Add_Route />
          </Route>

          <Route path="/home">
            <Find_Bus />
          </Route>

          <Route path="/test">
            <Test_case />
          </Route>

          <Route path="/bus-list">
            <Bus_List />
          </Route>

          <Route path="/admin-dash">
            <Admin_Dash />
          </Route>

          <Route path="/bus-reg">
            <Bus_Reg />
          </Route>

          <Route path="/select-route">
            <Select_Route />
          </Route>

          <Route path="/session-pass">
            <Session_Pass />
          </Route>

          <Route path="/update-bus">
            <Update_Bus />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
