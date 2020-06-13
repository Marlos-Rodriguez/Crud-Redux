import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://api-crudredux.herokuapp.com/",
});

export default clienteAxios;
