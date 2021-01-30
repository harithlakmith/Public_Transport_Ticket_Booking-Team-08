import logo from './../../logo.svg';
import './Pass_Reg_Form.css';
//import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pass_Reg_Form() {
  return (

<div class="container p-1">
      <div class="box">
        <h1>
          <u>Passenger Registration Form</u>
        </h1>

    <div className="Pass_Login">
      <form action="/examples/actions/confirmation.php" method="post">
		
		<p></p>
		<hr/>
        <div class="form-group">

        <div class="form-group">
           <input type="NIC" class="form-control" name="NIC" placeholder="NIC" required="required"/>
        </div>
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div class="form-group">
            <input type="Telephone" class="form-control" name="Telephone" placeholder="Telephone" required="required"/>
        </div>        
        <div class="form-group">
			
		</div>
		<div class="form-group">
            <button type="Register" class="btn btn-primary btn-lg">Register</button>
        </div>
    </form>
    </div>
    </div>
    </div>
  );
}

export default Pass_Reg_Form;
