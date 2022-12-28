import axios from "axios";
import cookie from "js-cookie";

const API_URL = process.env.REACT_APP_PROXY_URL;

const register = (full_name, email, pwd) => {
  return axios.post(API_URL + "method/signup", {
    full_name,
    email,
    pwd,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "method/login", {
      usr: username,
      pwd: password,
    })
    .then((response) => {
      console.log(response.data.full_name);
      if (response.data && response.data.full_name) {
        localStorage.setItem("user", JSON.stringify(response.data));
        cookie.set("user", response.data.full_name, { expires: 1 });
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  cookie.remove("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
