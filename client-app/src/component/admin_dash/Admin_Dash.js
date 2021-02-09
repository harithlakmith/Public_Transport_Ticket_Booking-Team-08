import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin_Dash.css";

function Admin_Dash() {
  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Admin Dashboard</u>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-lg-8 ; h2 ">Routes</div>
        </div>
        <br></br>
        <div class="row">
          <div class="row-row1"></div>
          <button class="button button2">Show Route</button>
          <div class="row-row2"></div>
          <button class="button button2">Add Route</button>
          <div class="row-row2"></div>
          <button class="button button2">Edit Route</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-lg-8 ; h2 ">Bus</div>
        </div>
        <br></br>
        <div class="row">
          <div class="row-row1"></div>
          <button class="button button2">Show Bus</button>
          <div class="row-row2"></div>
          <button class="button button2">Add Bus</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-lg-8 ; h2 ">Session</div>
        </div>
        <br></br>
        <div class="row">
          <div class="row-row1"></div>
          <button class="button button2">Show Session</button>
          <div class="row-row2"></div>
          <button class="button button2">Add Session</button>
        </div>
      </div>
    </div>
  );
}

export default Admin_Dash;
