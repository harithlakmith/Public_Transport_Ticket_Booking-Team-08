
//import './Pass_Info_Update.css';
//import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";

class Pass_Info_Update extends React.Component {

    constructor(props) {  
        super(props)  
     
    this.handleChange = this.handleChange.bind(this);  
  
    this.UpdatePassenger = this.UpdatePassenger.bind(this);  
    
         this.state = {  
            nic:'',
            name: '',  
          
            email: '',  
            password: '' , 
            telephone:'',
           
    
        }  
    }  
    
    handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }
    
    componentDidMount() {  
      axios.get('http://localhost:5000/Passenger/1')  
          .then(response => {  
              this.setState({ 
                nic: response.data.NIC, 
                name: response.data.Name,  
                telephone: response.data.Tp,  
                email: response.data.Email,  
                password : response.data.Password 
                
            });  
    
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    } 
    
    
   
    
    UpdatePassenger(e) {  
     // debugger;  
      e.preventDefault();  
      const obj = {  
        PId: 1,
        NIC:this.state.nic,  
        Name: this.state.name,  
        Tp: parseInt(this.state.telephone),  
        Email: this.state.email,  
        Password: this.state.password ,
        Verified:1
      
    
      };  
      axios.post('http://localhost:5000/Passenger/update/1', obj)  
          .then(res => console.log(res.data));  
        //  debugger;  
          //this.props.history.push('/Businfo')  
    }  
    
render(){

  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Passenger Information Update</u>
        </h1>
        <form class="m-5">
          <p>Please fill in this form to create an account!</p>
          <hr />

          <div class="form-group">
            <div class="row">
              <div class="col">
                <label>NIC : </label>
                <label>123456789v</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="name" value={this.state.name} onChange={this.handleChange} 
                  placeholder="First Name"
                  required="required"
                />
              </div>
              
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="email" value={this.state.email} onChange={this.handleChange} 
              placeholder="Email"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="password" value={this.state.password} onChange={this.handleChange} 
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="telephone" value={this.state.telephone} onChange={this.handleChange} 
              placeholder="Telephone"
              required="required"
            />
          </div>
          <div class="form-group"></div>
          <div class="form-group">
            <button type="Update" onClick={this.UpdatePassenger} class="btn btn-primary btn-lg">
              Update
            </button>
          </div>
        </form>
        <div class="hint-text">
          {" "}
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
}}

export default Pass_Info_Update;
