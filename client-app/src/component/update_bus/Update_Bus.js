import "bootstrap/dist/css/bootstrap.min.css";
import "./Update_Bus.css";
import React from "react";
import axios from "axios";

class Update_Bus extends React.Component {

  constructor(props) {  
    super(props)  
 
this.handleChange = this.handleChange.bind(this);  
this.UpdateInfo = this.UpdateInfo.bind(this);  
this.UpdatePassword = this.UpdatePassword.bind(this);  

     this.state = {  
        OldPassword: '',  
        NewPassword: '',  
        Seats: '',  
        DriverName: '' , 
        DriverRegNo:'',
        ConductorName:'',
        ConductorRegNo:'' 

    }  
}  

handleChange = (e) => {
  this.setState({[e.target.name]:e.target.value});
}

componentDidMount() {  
  axios.get('http://localhost:5000/BusInfo/NB2021')  
      .then(response => {  
          this.setState({ 
             
            DriverName: response.data.DriverName,  
            DriverRegNo: response.data.DriverNo,  
            ConductorName: response.data.CondName,  
            ConductorRegNo : response.data.CondNo ,
            Seats: response.data.MaxSeats 
        });  

      })  
      .catch(function (error) {  
          console.log(error);  
      })  
} 


UpdatePassword(e) {  
  debugger;  
  e.preventDefault();  
  const obj = {  
      Id:this.props.match.params.id,  
    Name: this.state.Name,  
    RollNo: this.state.RollNo,  
    Class: this.state.Class,  
    Address: this.state.Address  

  };  
  axios.post('http://localhost:5000/BusInfo', obj)  
      .then(res => console.log(res.data));  
      debugger;  
      this.props.history.push('/Studentlist')  
}  

UpdateInfo(e) {  
 // debugger;  
  e.preventDefault();  
  const obj = {  
    BusNo:'NB2021',  
    DriverName: this.state.DriverName,  
    DriverNo: parseInt(this.state.DriverRegNo),  
    CondName: this.state.ConductorName,  
    CondNo : parseInt(this.state.ConductorRegNo) ,
    MaxSeats: parseInt(this.state.Seats) 

  };  
  axios.post('http://localhost:5000/BusInfo/update/NB2021', obj)  
      .then(res => console.log(res.data));  
    //  debugger;  
      //this.props.history.push('/Businfo')  
}  







render(){
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
                  type="password" name="OldPassword" value={this.state.OldPassword} onChange={this.handleChange} 
                  placeholder="type your old password"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-4 ; h5 ">New Password</div>
              <div class="col-lg-5">
                <input
                  type="password" name="NewPassword" value={this.state.NewPassword} onChange={this.handleChange}
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
            <button type="button" onClick={this.UpdatePassword} class="btn btn-primary btn-lg">
              UPDATE PASSWORD
            </button>
          </div>
          <div class="box-box2">
            <div class="row">
              <div class="col-lg-6 ; h5 ">Number of Seats</div>
              <div class="col-lg-1">
                <input
                  type="text" name="Seats" value={this.state.Seats} onChange={this.handleChange} 
                  min="1"
                  max="54"
                
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
                <input type="text" name="DriverName" value={this.state.DriverName} onChange={this.handleChange} ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input type="text" name="DriverRegNo" value={this.state.DriverRegNo} onChange={this.handleChange} ></input>
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
                <input type="text" name="ConductorName" value={this.state.ConductorName} onChange={this.handleChange} ></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-4 ; h5 ">Register No.</div>
              <div class="col-lg-5">
                <input type="text" name="ConductorRegNo" value={this.state.ConductorRegNo} onChange={this.handleChange} ></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <button type="button" onClick={this.UpdateInfo} class="btn btn-primary btn-lg">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Update_Bus;
