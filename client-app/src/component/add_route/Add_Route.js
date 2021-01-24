import logo from './../../logo.svg';
import './Add_Route.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';



 class Add_Route extends React.Component {
    state = {
      
      RNum:'',
      startAt:'',
      stopAt:'',
      fullTime:0,
      fullPrice:0,
      fullDistance:0

    }
  
    handleChange = event => {
      this.setState({ 
                      RNum: event.target.value,
                     startAt: event.target.value,
                     stopAt: event.target.value,
                      fullTime: event.target.value,
                      fullDistance: event.target.value  });
    }
  
    handleSubmit = event => {
      //event.preventDefault();
  
      const route = {
        
       RNum: this.state.routeNo,
        startHolt:this.state.startAt,
       startHoltId:1,
       stopHolt:this.state.stopAt,
       stopHoltId:100,
       Duration:this.state.fullTime,
       Distance:this.state.fullDistance
       // "StartHoltId": 1,
        //"StartHolt": this.state.startAt,
        //"StopHoltId": 10,
        //"StopHolt": this.state.stopAt,
        //"Duration": this.state.fullTime,
        //"Distance": this.state.fullDistance,
        //"RNum": this.state.RNum

      };
  
      axios.post(`http://localhost:5000/Route`, { route })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })



    }
  
    render() {
      return (
        <div>

<div className="Add_Route" class="">

<div class="Add_Route row m-1">
    <div class="col-md-12">


<div class="mt-5 signup-form">
<form onSubmit={this.handleSubmit}>
    <h2 class="mt-4">Add New Route</h2>
    <p>Please fill in this form to create bus routes!</p>
    <hr/>
    <div class="form-group">
        <div class="row">
            <div class="col"><input type="text" class="form-control" name="RNum" placeholder="RouteNo" onChange={this.handleChange}  required="required"/></div>
        </div>
    </div>

    <div class="form-group">
        <div class="row">
            <div class="col-6"><input type="text" class="form-control" name="startAt" placeholder="Start At" onChange={this.handleChange}  required="required"/></div>
            <div class="col-6"><input type="text" class="form-control" name="stopAt" placeholder="Stop At" onChange={this.handleChange}  required="required"/></div>
        </div>        	
    </div>

    <div class="form-group">
        <div class="row">
            <div class="col-4"><input type="text" class="form-control" name="fullTime" placeholder="Full Time" onChange={this.handleChange}  required="required"/></div>
           
            <div class="col-4"><input type="text" class="form-control" name="fullDistance" placeholder="Full Distance" onChange={this.handleChange}  required="required"/></div>
        </div>        	
    </div>
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
    
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-lg">Create</button>
    </div>
</form>
<div class="hint-text">Tiketz <a href="#"><i>Smart Travelling for Smart Lifestyle</i></a></div>
</div>

</div>

</div>
</div>



        </div>
      )
    }
  }
  


export default Add_Route;
