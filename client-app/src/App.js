import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Pass_Info_Update from './component/pass_info_update/Pass_Info_Update';
import Pass_Login from './component/pass_login/Pass_Login';
import Pass_Reg_Form from './component/pass_reg_form/Pass_Reg_Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" class="container text-center" >
     
      
      
      
      
      <BrowserRouter>
        <switch>
          <Route path="/pass-info-update">
            <Pass_Info_Update />
          </Route>

          <Route path="/pass-login">
          <Pass_Login />
          </Route>

          <Route path="/pass-reg-form">
          <Pass_Reg_Form />
          </Route>
        </switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
