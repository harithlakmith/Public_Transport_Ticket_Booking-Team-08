import "bootstrap/dist/css/bootstrap.min.css";
import "./Update_Bus.css";
import React from "react";
import axios from "axios";

function Update_Bus() {
  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Update Bus Information</u>
        </h1>
        <br></br>
        <br></br>
        <div class="row">
          <div class="box-box1"></div>
          <div class="box-box4">
            <div class="row">
              <div class="col-lg-4 ; h5 ">Old Password</div>
              <div class="col-lg-5">
                <input
                  type="password"
                  placeholder="type your old password"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">New Password</div>
              <div class="col-lg-5">
                <input
                  type="password"
                  placeholder="type your new password"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">Confirm Password</div>
              <div class="col-lg-5">
                <input
                  type="password"
                  placeholder="renter your new password"
                ></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-primary btn-lg">
              UPDATE PASSWORD
            </button>
          </div>
          <div class="box-box2">
            <div class="row">
              <div class="col-lg-6 ; h5 ">Number of Seats</div>
              <div class="col-lg-1">
                <input
                  type="Number"
                  min="1"
                  max="54"
                  value="0"
                  required="required"
                ></input>
              </div>
            </div>
            <br></br>

            <div class="row; h3">Driver</div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Name</div>
              <div class="col-lg-5">
                <input type="text"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input type="text"></input>
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
                <input type="text"></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input type="text"></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-primary btn-lg">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update_Bus;
