import logo from "./../../logo.svg";
//import "./Add_Route.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import {Redirect, withRouter} from 'react-router-dom';

class Add_Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RNum: "",
      startAt: "",
      startHoltId: 0,
      stopAt: "",
      stopHoltId: 0,
      fullTime: 0,
      fullPrice: 0,
      fullDistance: 0,
      postRoute:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.AddRoute = this.AddRoute.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  AddRoute = () => {
    //event.preventDefault();

    axios
      .post("http://localhost:5000/Route", {
      
        StartHoltId: 1,
        StartHolt: this.state.startAt,
        StopHoltId: 10,
        StopHolt: this.state.stopAt,
        Duration: parseInt(this.state.fullTime),
        Distance: parseInt(this.state.fullDistance),
        RNum: this.state.RNum,
      })
      .then(res => {
        this.setState({
          postRoute: res.data.RId
        });
      });
  };

  render() {
    if (JSON.parse(localStorage.getItem('role'))!='Administrator'){
      return <Redirect to={'/sign-in'} />
    }
    return (
      <div>
        <div class="container p-1">
          <div class="box">
            <h1>
              <u>Bus Registration Form</u>
            </h1>
            <h5>Please fill in this form to create bus routes!</h5>
            <br></br>
            <br></br>

            <div class="row">
              <div class="box-box1"></div>
              <div class="box-bo">
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Route No </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      class="form-control"
                      name="RNum"
                      placeholder="RouteNo"
                      onChange={this.handleChange}
                      value={this.state.RNum}
                      required="required"
                    />
                  </div>
                </div>

                <br></br>
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Start At </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      class="form-control"
                      name="startAt"
                      placeholder="Start At"
                      onChange={this.handleChange}
                      value={this.state.startAt}
                      required="required"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Full Time </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      pattern="[0-9]*"
                      class="form-control"
                      name="fullTime"
                      placeholder="Full Time"
                      onChange={this.handleChange}
                      value={this.state.fullTime}
                      required="required"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Full price </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      pattern="[0-9]*"
                      class="form-control"
                      name=""
                      placeholder="Full Price"
                      onChange={this.handleChange}
                      value={this.state.fullPrice}
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div class="box-bo">
                <div class="row"></div>
                <br></br>
                <br></br>
                <hr></hr>
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Stop At </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      class="form-control"
                      name="stopAt"
                      placeholder="Stop At"
                      onChange={this.handleChange}
                      value={this.state.stopAt}
                      required="required"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row">
                  <div class="col-lg-5 ; h5 ">Full Distance </div>
                  <div class="col-lg-1 ; h5 ">: </div>
                  <div class="col-lg-5">
                    <input
                      type="text"
                      pattern="[0-9]*"
                      class="form-control"
                      name="fullDistance"
                      placeholder="Full Distance"
                      onChange={this.handleChange}
                      value={this.state.fullDistance}
                      required="required"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br></br>

            <div class="col-6"></div>

            <hr />

            <div class="form-group">
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
            </div>

            <div class="row">
              <div class="box-box1"></div>
              <div class="box-bo2">
                <table class="table table-hover table-info">
                  <thead>
                    <tr class="bg-info">
                      <th scope="col-lg-3">Halt</th>
                      <th scope="col-lg-3">Price</th>
                      <th scope="col-lg-3">Time</th>
                      <th scope="col-lg-3">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="box-bo4"></div>
              <div class="box-bo3">
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-lg">
                    Add
                  </button>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-lg">
                    Edit
                  </button>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-lg">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="box-box1"></div>
              <div class="box-bo1">
                <div class="form-group">
                  <button
                    type="submit"
                    onClick={this.AddRoute}
                    class="btn btn-primary btn-lg"
                  >
                    Register route
                  </button>
                </div>
              </div>
            </div>
            <div class="hint-text">
              Tiketz{" "}
              <a href="#">
                <i>Smart Travelling for Smart Lifestyle</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_Route;
