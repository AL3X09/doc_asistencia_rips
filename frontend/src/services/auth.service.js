import axios from "axios";
//const API_URL = "http://localhost:8080/api/auth/";

const register = (name, last_name, email, direc, office, telephone, username, password) => {
  return axios.post("usuarios/register", {
    name,
    last_name,
    email,
    direc,
    office,
    telephone,
    username,
    password,
  }).then((response) => {
    //alert(response.data.message);
    /*console.log(response);
    console.log(response.data.message);*/
    //console.log(response.data);

    return response.data;
  }).catch((error) => {
    //handle error
    //alert(error.response.data.error);
    //console.log(error.response);
    //console.log(error.response.data.error);
    return Promise.reject(error.response.data)
    //return error.response.data;

  });
};

const login = (username, password) => {

  return axios
    .post("usuarios/login", {
      username,
      password,
    })
    .then((response) => {
      //console.log(response.data);
      if (response.data.token) {
        //console.log(response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }).catch(function (error) {
      // handle error
      //console.log(error.response.data);
      alert(error.response.data.error);

    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};