
import React, {Component} from 'react'
import queryString from 'query-string';
import axios from 'axios'
import './Bus_List.css';
import { RouteComponentProps, BrowserRouter, Switch, Route, Link, useLocation, useRouteMatch,withRouter, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RichText, Date } from 'prismic-reactjs';
import Moment from 'moment';
import ContentLoader from "react-content-loader"
//import location  from 'react-router';


class Bus_List extends Component {


    state = {
      buses: [],
      load:true
       
     };   
      
   componentDidMount() {

    //const value = queryString.parse(this.props.location.search);
    const value = new URLSearchParams(this.props.location.search)
    /*this.setState({
      dateSearch:value.get('date'),
      toSearch:value.get('to'),
      fromSearch:value.get('from'),
      UrlPost:'http://localhost:5000/Search/SearchTicket?date='+value.get('date')+'&from_='+value.get('from')+'&to_='+value.get('to')
    });*/
    
    
    axios.get('http://localhost:5000/Search/SearchTicket?date='+value.get('date')+'&from_='+value.get('from')+'&to_='+value.get('to'))
    .then(res => {
      console.log(res);
      this.setState({
        buses: res.data,
        load:false
      });
    },error=>{
      this.setState({
        
        load:false
      });
    })
    }


    
      render(){
        
      //  const search = useLocation().search;
      //  const params = new URLSearchParams(search);
  
      //dateYMD =this.props.location.search;
    
   

        const { buses, load } = this.state
        const { dateSearch } = this.state

        
        const buslist = buses.length ? (
          buses.map(bus => {
         
            const urlBook = '/book-now?date='+Moment(bus.Date).format('YYYY-MM-DD')
                            +'&routestartholt='+bus.RouteStartHolt
                            +'&routestopholt='+bus.RouteStopHolt
                            +'&routeno='+bus.RNum
                            +'&fromholt='+bus.FromHolt
                            +'&toholt='+bus.ToHolt
                            +'&ticketprice='+bus.TicketPrice
                            +'&arrivedtime='+Moment(bus.ArrivedTime).format('hh:mm A')
                            +'&duration='+bus.Duration
                            +'&sid='+bus.SId

            return (
                <div class="card  bg-light mb-3">
                        <div class="card-header">
                            <div class="row">
                            
                                <div class="col-md-6"><h3>{bus.RNum}&nbsp;&nbsp; {bus.RouteStartHolt} - {bus.RouteStopHolt}</h3></div>
                                <div class="col-md-6"><h3>{Moment(bus.Date).format('YYYY-MM-DD')}</h3></div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                

                                <div class="col-md-3"><p>From: {bus.FromHolt} To: {bus.ToHolt}</p><p>Time Duration:{bus.Duration} hours</p></div>
                                <div class="col-md-3"><p>Depature from {bus.FromHolt} : {Moment(bus.ArrivedTime).format('hh:mm A')}</p></div>
                                <div class="col-md-3"><p>Price:Rs {bus.TicketPrice} /=</p>
                                    
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <a href={urlBook} class="btn btn-primary btn-lg btn-block">BOOK NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
            )
          })
        ) : (
          <div className="center">No Buses available</div>
        );


        return (

        <section class="hero-section bg-light" id="services">
          <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="text-center mb-5">
                            <h3 class="text-primary text-uppercase ">TICKETS RESERVATION SOLUTION</h3>
                           
                        </div>
                    </div>
                </div>
            {load?(
                     <ContentLoader 
                     speed={2}
                     width={1476}
                     height={150}
                     viewBox="0 0 1476 150"
                     backgroundColor="#f3f3f3"
                     foregroundColor="#ecebeb"
                     
                   >
                     <rect x="98" y="16" rx="3" ry="3" width="300" height="13" /> 
                     <rect x="100" y="46" rx="3" ry="3" width="300" height="12" /> 
                     <rect x="4" y="89" rx="3" ry="3" width="1000" height="12" /> 
                     <rect x="4" y="113" rx="3" ry="3" width="1000" height="12" /> 
                     <rect x="3" y="138" rx="3" ry="3" width="1000" height="12" /> 
                     <circle cx="38" cy="38" r="38" />
                   </ContentLoader>

            ):(
                  
               <div class="row justify-content-center">
               <div class="col-12 ">
               {buslist}
               </div>
           </div>
            )}

             
          </div>
        </section>



            
  );
      }

  
}

export default withRouter(Bus_List);
