import axios from "axios";
import jwt_decode from 'jwt-decode'

const API_URL = "http://localhost:5000/api/Accounts/";

class AuthService {
  login(aEmail, aPassword) {
    return axios
      .post(API_URL + "Login", {
        Email:aEmail,
        Password:aPassword
      })
      .then(response => {
        if (response.data) {
          //const token = response.data;
          //const user = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia0BnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJQYXNzZW5nZXIiLCJleHAiOjE2MTUxMDc1MzEsImlzcyI6IkVmYWNSdWh1bmEifQ.OwsE-o30HuJljtcOLlh3H_jclc1qiJaMlRCRytACPPY"); // decode your token here
          //localStorage.setItem("user", user);
         localStorage.setItem("user", JSON.stringify(response.data));
         localStorage.setItem("role", JSON.stringify(response.data.role[0]));
         localStorage.setItem("userInfo", JSON.stringify(response.data.data));
         
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem('role');
    localStorage.removeItem('userInfo');
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
