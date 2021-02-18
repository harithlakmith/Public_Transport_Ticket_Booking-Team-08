import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/bootstrap.min.css';
import '../../css/style.css';

import axios from 'axios';

 class Test_case extends Component {

	constructor(props){  
		super(props) 
		this.state = {
		  
		  NIC:'',
		  First_name:'',
		  Last_name:'',
		  Email:'',
		  Password:'',
		  Telephone:''
	
		};
	    this.handleChange = this.handleChange.bind(this);
		this.AddPass = this.AddPass.bind(this);
	  }
	  
		handleChange = (e) => {
		  this.setState({[e.target.name]:e.target.value});
		}
	  
		AddPass = () => {
		  //event.preventDefault();
	
		  axios.post('http://localhost:5000/Passenger', {
			//PID: parseInt(this.state.NIC),
			Name: this.state.First_name,
			Email: this.state.Email,
			Password: this.state.Password,
			Tp: parseInt(this.state.Telephone),
			Token : 'test',
			Verified:0
	
		})
		  .then(json => {
		  
			  console.log(json.data);  
			
		  });   
	
		}
	
	  render() {
	  return (
	
	<div>
		
		
        <section class="hero-section" id="home">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="hero-wrapper mb-4">
                            <p class="font-16 text-uppercase">Discover Invoza Today</p>
                            <h1 class="hero-title mb-4">Make your Site Amazing & Unique with <span class="text-primary">Invoza</span></h1>

                            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                            <div class="mt-4">
                                <a href="#" class="btn btn-primary mt-2 mr-2">Get Started</a>
                                <a href="#" class="btn btn-success mt-2 mr-2">Learn more</a>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-lg-6 col-sm-8">
                        <div class="home-img mt-5 mt-lg-0">
                            <img src="images/home-img.png" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>
              
            </div>
         
        </section>
       
        <section class="section bg-light" id="services">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase small-title">Services</h5>
                            <h4 class="mb-3">Services We Provide</h4>
                            <p>It will be as simple as occidental in fact, it will be Occidental.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="grid" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Bootstrap UI based</h5>
                            <p class="mb-0">To an English person, it will seem like English as skeptical.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="edit" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Easy to customize</h5>
                            <p class="mb-0">If several languages coalesce, the grammar of the language.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="headphones" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Awesome Support</h5>
                            <p class="mb-0">The languages only differ in their grammar their pronunciation</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="layers" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Creative Design</h5>
                            <p class="mb-0">Everyone realizes why a new common would be desirable.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="code" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Quality Code</h5>
                            <p class="mb-0">To achieve this, it would be necessary to have uniform.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="text-center p-4 mt-3">
                            <div class="avatar-md mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-soft-primary">
                                    <i data-feather="tablet" class="icon-dual-primary"></i>
                                </span>
                            </div>
                            <h5 class="font-18">Responsive layout</h5>
                            <p class="mb-0">Their separate existence is a myth. For science, music, etc.</p>
                        </div>
                    </div>
                </div>
               

                <div class="row mt-4">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <a href="#" class="btn btn-success">View more</a>
                        </div>
                    </div>
                </div>
              
            </div>
           
        </section>
     

		</div>
	
	  );
	  }
   /* render() {
        return (
            <div class="">
	<div class="row">
		<div class="col-md-12">
			<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
				 
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="navbar-toggler-icon"></span>
				</button> <a class="navbar-brand" href="#">Brand</a>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="navbar-nav">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							 <a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
					<form class="form-inline">
						<input class="form-control mr-sm-2" type="text" /> 
						<button class="btn btn-primary my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<ul class="navbar-nav ml-md-auto">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
			 <a id="modal-220702" href="#modal-container-220702" role="button" class="btn" data-toggle="modal">Launch demo modal</a>
			
			<div class="modal fade" id="modal-container-220702" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="myModalLabel">
								Modal title
							</h5> 
							<button type="button" class="close" data-dismiss="modal">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div class="modal-body">
							...
						</div>
						<div class="modal-footer">
							 
							<button type="button" class="btn btn-primary">
								Save changes
							</button> 
							<button type="button" class="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
					
				</div>
				
			</div>
			
			<nav>
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li class="breadcrumb-item">
						<a href="#">Library</a>
					</li>
					<li class="breadcrumb-item active">
						Data
					</li>
				</ol>
			</nav>
		</div>
	</div>
</div>
        )
    }*/
}
export default Test_case 