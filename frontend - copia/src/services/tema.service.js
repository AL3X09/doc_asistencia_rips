import axios from "axios";
import authHeader from "./auth-header";

const load_datos_t = () => {
        return axios.get("temas/api",
        { 
          headers: authHeader() 
        }).then((response) => {
          //return JSON.stringify(response.data);
          return response.data;
        }).catch(function (error) {
          // handle error
          return Promise.reject(error.response.data)
        });
};

const crear_t = (nombre) => {
  return axios.post("temas/api/crear_t", {
    nombre,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return Promise.reject(error.response.data)

  });
};

export default {
  load_datos_t,
  crear_t,
};

