import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,Redirect,Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

import AuthService from "./services/auth.service";

import Add_Route from './component/add_route/Add_Route';
import Find_Bus from './component/find_bus/Find_Bus';
import Test_case from './component/Test_case/Test_case';
import Bus_List from './component/Bus_List/Bus_List';
import Book_Now from './component/book_now/Book_Now';
import Admin_Dash from './component/admin_dash/Admin_Dash';
import Bus_Reg from './component/bus_reg/Bus_Reg';
import Select_Route from './component/select_route/Select_Route';
import Session_Pass from './component/session_pass/Session_Pass';
import Update_Bus from './component/update_bus/Update_Bus';
import NavBar from './navbar';
import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import SignIn from './component/sign_in/SignIn';
import Nav_Bar from './component/nav_bar/Nav_Bar';
import Pass_Reg from './component/pass_reg/Pass_Reg';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      jwttoken:undefined,
      role:undefined,
      useInfo:undefined
    };
  }

  componentDidMount() {
    const user1 = AuthService.getCurrentUser();
    const role = JSON.parse(localStorage.getItem('role'));    
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));  

    if (user1) {
      const token = jwt_decode(user1.token); 
    //  const user = jwt_decode(user1.role);
      this.setState({
       // currentUser: user,
        jwttoken:token,
        role:role,
        userInfo:userInfo
        /*showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),*/
      });
    }
  }

  logOut() {
    AuthService.logout();
   
  }

render(){
  const { currentUser, showModeratorBoard, showAdminBoard, jwttoken, role, userInfo } = this.state;
  return (
  
    <div>
         <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark bg-white">
            <div class="container">
             
                <a class="logo text-uppercase" href="/home">
                    <img src="logo2.png" alt="" class="logo-dark" height="60" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto navbar-center" id="mySidenav">
                        <li class="nav-item active">
                            <a href="/home" class="nav-link">Home</a>
                        </li>
                        
                    </ul>
                  
           {jwttoken ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
  
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true" aria-expanded="false">Hi, {userInfo.FirstName}</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">My profile</a>
                      <a class="dropdown-item" href="#">Setting</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="/sign-in" onClick={this.logOut}>Log Out</a>
                  </div>
              </li>

            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                 <a href="/sign-in" class="btn btn-success btn-rounded navbar-btn">Log In</a>
                
              </li>

              <li className="nav-item">
                  <a href="/passenger-signup" class="btn btn-success btn-rounded navbar-btn">Register</a>
                  
              </li>

             
            </div>
          )}
                    
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

          <Route path="/bus-list" component={Bus_List}>
          <Bus_List />
          </Route>

          <Route path="/book-now" component={Book_Now}>
          <Book_Now/>
          </Route>

          <Route path="/admin-dash" component={Admin_Dash}>
          < Admin_Dash/>
          </Route>

          <Route path="/bus-reg" component={Bus_Reg}>
          <Bus_Reg />
          </Route>

          <Route path="/select-route" component={Select_Route}>
          <Select_Route />
          </Route>

          <Route path="/session-pass" component={Session_Pass}>
          <Session_Pass />
          </Route>

          <Route path="/update-bus" component={Update_Bus}>
          <Update_Bus />
          </Route>

          <Route path="/update-passenger" component={Pass_Info_Update}>
          <Pass_Info_Update />
          </Route>

          <Route path="/sign-in" component={SignIn} >
          <SignIn />
          </Route>

          <Route path="/passenger-signup" component={Pass_Reg} >
          <Pass_Reg />
          </Route>

        </Switch>
      </BrowserRouter>

         
    </div>
   
  );
  }
}

export default App;
/*<header>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#"><img src="images/logo.png" alt="logo"/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                    <a class="nav-link" href="#howitworks">How it works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Our Services </a>
                                </li>
                                <li><a href="booking.html" class="btn btn-info">Book a Cleaning</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>*/