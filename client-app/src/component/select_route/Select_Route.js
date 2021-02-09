import "bootstrap/dist/css/bootstrap.min.css";
import "./Select_Route.css";
import React from "react";
import axios from "axios";

function Select_Route() {
  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Select Route</u>
        </h1>
        <br></br>
        <br></br>

        <div class="row">
          <div class="box-box1"></div>
          <div class="box-box3">
            <div class="row">
              <div class="col-lg-4 ; h4 ">My Bus</div>
              <div class="col-lg-5">
                <input type="text" required="required"></input>
              </div>
            </div>

            <br></br>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h4 ">Route</div>
              <div class="col-lg-1">
                <div class="dropdown">
                  <select name="pasenger" id="pasenger">
                    <option value="name">SELECT YOUR ROUTE</option>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="box-box1"></div>

          <div class="box-box2">
            <div class="row">
              <div class="col-lg-8 ; h4 ">Date of Journey</div>
              <div class="col-lg-2">
                <input type="date"></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="row">
              <div class="col-lg-8 ; h4 ">Start Time of Your Journey</div>
              <div class="col-lg-2">
                <input type="time"></input>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="box-box1"></div>
          <button type="button" class="btn btn-primary btn-lg">
            RESERVE THIS SESSION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Select_Route;
