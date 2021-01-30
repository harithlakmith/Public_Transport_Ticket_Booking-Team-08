import logo from './../../logo.svg';
import './Pass_Login.css';

//import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pass_Login() {
  return (
    <div class="container p-1">
      <div class="box">
        <h1>
          <u>Passenger Login</u>
        </h1>
           
	
            <hr/>

        <div class="row">
            <div class="col-md-6">
            <form  method="post">
		
		
       
        
        <div class="form-group">
			    	
        </div>
      
        <div class="form-group">
        <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		    

	
        
        
    </form>

    <div class="form-group">
            <button type="Login" class="btn btn-primary btn-lg">Login</button>
        </div>
            </div>
            <div class="col-md-6">
            <img src="./../../login.JPG" alt="login" class="center"/>
            </div>

           
        </div>


</div>

</div>
    
  );
}

export default Pass_Login;
