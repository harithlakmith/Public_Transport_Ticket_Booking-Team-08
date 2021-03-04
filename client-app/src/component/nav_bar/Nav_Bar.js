import React, {Component}from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,Redirect, withRouter } from 'react-router-dom';


class Nav_Bar extends Component {

  constructor() {
    super();

  this.state = {
    ret: false,
    usr:localStorage.getItem('user')
  };

 
};

  logout(){
      localStorage.removeItem('user')
      this.setState({ret:true})
    };

render(){
  const { ret } = this.state;
  const { usr} = this.state;
  if (ret.ret) {
    return <Redirect to='/sign-in'/>;
  }

  const user = localStorage.getItem('user');
  
    if (usr){
       var lg = (<button onClick={this.logout} class="btn btn-success btn-rounded navbar-btn">LogOut</button>
        );
    }else{
      var lg = (<a href="/sign-in" class="btn btn-success btn-rounded navbar-btn">Log In</a>);
    }

     
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
                  
                    {lg}
                </div>
            </div>
        </nav>
         
    </div>
   
  );}
}

export default Nav_Bar;
