import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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



function App() {
  
  return (
   
    <div>
       
    

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

        </Switch>
      </BrowserRouter>

         
    </div>
   
  );
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