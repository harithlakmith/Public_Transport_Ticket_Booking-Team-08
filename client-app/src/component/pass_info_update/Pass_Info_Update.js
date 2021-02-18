import logo from "./../../logo.svg";
//import './Pass_Info_Update.css';
//import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import "bootstrap/dist/css/bootstrap.min.css";

class Pass_Info_Update extends React.Component {

    constructor(props) {  
        super(props)  
     
    this.handleChange = this.handleChange.bind(this);  
    this.UpdateInfo = this.UpdateInfo.bind(this);  
    this.UpdatePassword = this.UpdatePassword.bind(this);  
    
         this.state = {  
            nic:'',
            firstname: '',  
            lastname: '',  
            email: '',  
            password: '' , 
            telephone:'',
           
    
        }  
    }  
    
    handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }
    
    componentDidMount() {  
      axios.get('http://localhost:5000/Passenger/NB2021')  
          .then(response => {  
              this.setState({ 
                 
                Name: response.data.DriverName,  
                Tp: response.data.DriverNo,  
                Email: response.data.CondName,  
                Password : response.data.CondNo 
                
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
                  name="first_name" value={this.state.firstname} onChange={this.handleChange} 
                  placeholder="First Name"
                  required="required"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="last_name" value={this.state.lastname} onChange={this.handleChange} 
                  placeholder="Last Name"
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
              name="Telephone" value={this.state.telephone} onChange={this.handleChange} 
              placeholder="Telephone"
              required="required"
            />
          </div>
          <div class="form-group"></div>
          <div class="form-group">
            <button type="Update" class="btn btn-primary btn-lg">
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
