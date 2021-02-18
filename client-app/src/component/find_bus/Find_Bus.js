import React, { Component } from 'react'
//import './welcome-text/welcome_text.css';
//import './css/datepicker.css';
//import './css/bootstrap.min.css';
//import './css/tooplate-style.css';
import './Find_Bus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import welcome_text from './welcome-text/welcome_text';
import axios from 'axios'

 class Find_Bus extends Component {
    state = {
        towns: []
      }
    componentDidMount(){
        axios.get('http://localhost:5000/RouteInfo/townlist')
          .then(res => {
            console.log(res);
            this.setState({
              towns: res.data
            });
          })
      }

      

    render() {
        const { towns } = this.state
        const townList = towns.length ? (
          towns.map(town => {
            return (
                <option value={town.HoltName}>{town.HoltName}</option>
            )
          })
        ) : (
          <div className="center">No Towns available</div>
        );

        return (
        <div>
            <section class="hero-section videobg" id="home">
            
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-lg-6 ">
                        <div class="hero-wrapper mb-4 bg-white p-5 welcomebox">
                            <p class="font-16 text-uppercase"></p>
                            <h1 class="hero-title mt-4 mb-4">Quickly Reserve Your<br/>Ticket with <span class="text-primary">Ticketz</span></h1>

                            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                            <div class="mt-4">
                                
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-lg-6 col-sm-8 pt-4 px-5">
                        <div class="home-img mt-5 mt-lg-0 subscribe">
                        <form action="/bus-list" method="get" class="">
                            <div class="form-group">
                                <select name="from" class="form-control " id="from">
                                        <option value="">From ...</option>
                                        {townList}
                                </select>
                            </div>
                            <div class="form-group">
                                    <select name="to" class="form-control" id="to">
                                        <option value="">To ...</option>
                                        {townList}
                                    </select>
                            </div>
                            <div class="form-group">
                                <input name="date" type="date" class="form-control" id="inputCheckOut" placeholder="Date ..."/>
                            </div>
                            <div class="form-group tm-form-element tm-form-element-2">
                                    <button type="submit" class="btn btn-primary ">Check Availability</button>  
                            </div>
                        </form>
                            <img src="images/home-im.png" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>
              
            </div>
         
        </section>
  
    </div>  

        )
    }
}


export default Find_Bus