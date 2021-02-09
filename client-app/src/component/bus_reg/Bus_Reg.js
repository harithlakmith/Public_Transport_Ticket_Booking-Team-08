import "bootstrap/dist/css/bootstrap.min.css";
import "./Bus_Reg.css";
import React from "react";
import axios from "axios";

function Bus_Reg() {
  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Bus Registration Form</u>
        </h1>

        <br></br>
        <br></br>
        <div class="row">
          <div class="box-box1"></div>
          <div class="box-box4">
            <br></br>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">Bus Number</div>
              <div class="col-lg-5">
                <input class="form" type="text" required="required"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">Add E-Mail</div>
              <div class="col-lg-5">
                <input
                  class="form"
                  type="email"
                  name="email"
                  required="required"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">Password</div>
              <div class="col-lg-5">
                <input
                  class="form"
                  type="password"
                  name="email"
                  required="required"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">Number of Seats</div>
              <div class="col-lg-1">
                <input
                  type="Number"
                  min="1"
                  max="54"
                  required="required"
                ></input>
              </div>
            </div>
            <br></br>
          </div>
          <br></br>
          <div class="box-box2">
            <div class="row; h3">Driver</div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Name</div>
              <div class="col-lg-5">
                <input class="form" type="name"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input class="form" type="text"></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="row; h3">Conductor</div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Name</div>
              <div class="col-lg-5">
                <input class="form" type="text"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input class="form" type="text"></input>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="box-box1"></div>
          <button type="button" class="btn btn-primary btn-lg">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bus_Reg;
