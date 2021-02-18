import logo from "./../../logo.svg";
import "./Book_Now.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React ,{Component}from "react";
import axios from "axios";
import { RouteComponentProps, BrowserRouter, Switch, Route, Link, useLocation, useRouteMatch,withRouter, useParams} from "react-router-dom";


class Book_Now extends Component {

  state = {
    routeStartHolt:'',
    routeStopHolt:'',
    fromHolt:'',
    toHolt:'',
    sesDate:'',
    ticketPrice:'',
    ArrivedTime:'',
    routeNo:'',
    duration:'',
    fullTicket:1,
    halfTicket:0,
    totalTicket:''

  };

  ticketTot(){
    var tp = parseInt(this.state.ticketPrice);
    var ft = parseInt(this.state.fullTicket);
    var ht = parseInt(this.state.halfTicket);
    this.setState({
      totalTicket:tp*ft + (tp/2)*ht
    });

   
  }

  handleChange = (e) => {
     
      this.setState(
        {[e.target.name]:e.target.value,
        });
      
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.ticketTot(),
      1000
    );

    //const value = queryString.parse(this.props.location.search);
    const value = new URLSearchParams(this.props.location.search)
    this.setState({
      routeStartHolt:value.get('routestartholt'),
      routeStopHolt:value.get('routestopholt'),
      fromHolt:value.get('fromholt'),
      toHolt:value.get('toholt'),
      sesDate:value.get('date'),
      ticketPrice:value.get('ticketprice'),
      ArrivedTime:value.get('arrivedtime'),
      routeNo:value.get('routeno'),
      duration:value.get('duration')
     
      });
    
    
    axios.get('http://localhost:5000/Search/SearchTicket?date='+value.get('date')+'&from_='+value.get('from')+'&to_='+value.get('to'))
    .then(res => {
      console.log(res);
      this.setState({
        buses: res.data
      });
    })
    }


render(){
 

     
  return (
    <div class="container p-1">
      <br></br>
      <div class="box">
        <h1>
          <u>TICKETS RESERVATION SOLUTION</u>
        </h1>
        <br></br>

        <div class="card">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">
              <div class="row">
                <div class="col-md-6">
                  <h3>{this.state.routeNo}&nbsp;&nbsp;{this.state.routeStartHolt} - {this.state.routeStopHolt}</h3>
                </div>
                <div class="col-md-6">
                  <h3>{this.state.sesDate}</h3>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <table>
                    <tr>From: {this.state.fromHolt}</tr>
                    <tr>To : {this.state.toHolt}</tr>
                  </table>
                </div>
                <div class="col-md-4">
                  <table>
                    <tr>Arriving time: {this.state.ArrivedTime}</tr>
                    <br></br>
                    <tr>
                      <img
                        src="qr_code.jpg"
                        alt="QR_code"
                        width="100"
                        height="100"
                      />
                    </tr>
                  </table>
                </div>
                <div class="col-md-5">
                  <table>
                    
                    <tr>TICKET PRICE= Rs {this.state.ticketPrice}.00</tr>
                    <tr>Full tickets = <input type="number" min="0" class="form-control" name="fullTicket" placeholder="" value={this.state.fullTicket} onChange={this.handleChange} required="required"/></tr>
                    <tr>Half tickets = <input type="number" min="0" class="form-control" name="halfTicket" placeholder="" value={this.state.halfTicket} onChange={this.handleChange} /></tr>
                    <tr>
                      <h3>TOTAL PRICE = Rs {this.state.totalTicket}</h3>
                    </tr>
                    <tr>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Proceed
                        </button>
                      </div>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default withRouter(Book_Now);
