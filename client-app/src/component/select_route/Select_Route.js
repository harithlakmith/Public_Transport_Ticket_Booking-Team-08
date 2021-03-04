import "bootstrap/dist/css/bootstrap.min.css";
import "./Select_Route.css";
import React, { Component } from 'react'
import axios from "axios";

class Select_Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busNo: "",
      route: 0,
      date: 0,
      time: 0,
      routes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.SelectRoute = this.SelectRoute.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SelectRoute = () => {
    axios
      .post("", {
        BusNo: this.state.busNo,
        RId: parseInt(this.state.route),
        Date: parseInt(this.state.date),
        time: parseInt(this.state.time),
      })
      .then((json) => {
        console.log(json.data);
      });
  };

  componentDidMount() {
    axios.get("http://localhost:5000/Route").then((res) => {
      console.log(res);
      this.setState({
        routes: res.data,
      });
    });
  }

  render() {
    const { routes } = this.state;
    const routeList = routes.length ? (
      routes.map((route) => {
        return <option value={route.RId}>{route.RNum}:{route.StartHolt}-{route.StopHolt}</option>;
      })
    ) : (
      <div className="center">No Routes available</div>
    );

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
                  <input
                    type="text"
                    name="busNo"
                    onChange={this.handleChange}
                    value={this.state.busNo}
                    required="required"
                  ></input>
                </div>
              </div>

              <br></br>
              <br></br>
              <div class="row" action="" method="get">
                <div class="col-lg-4 ; h4 ">Route</div>
                <div class="col-lg-1">
                  <div class="dropdown">
                    <select
                      type="text"
                      pattern="[0-9]*"
                      name="route"
                      onChange={this.handleChange}
                      value={this.state.route}
                      required="required"
                    >
                      <option value="">Select Your Route</option>
                      {routeList}
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
                  <input
                    type="date"
                    pattern="[0-9]*"
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.date}
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <div class="row">
                <div class="col-lg-8 ; h4 ">Start Time of Your Journey</div>
                <div class="col-lg-2">
                  <input
                    type="time"
                    pattern="[0-9]*"
                    name="time"
                    onChange={this.handleChange}
                    value={this.state.time}
                  ></input>
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
            <button
              type="button"
              onClick={this.SelectRoute}
              class="btn btn-primary btn-lg"
            >
              RESERVE THIS SESSION
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Select_Route;
