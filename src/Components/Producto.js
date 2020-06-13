import React from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

//Redux
import { useDispatch } from "react-redux";
import {
  borrarProductoAction,
  ObtenerProductoEditar,
} from "../actions/productosAction";

const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  const history = useHistory(); //Habilitar History para redireccion

  //Confirmar si desea eliminarlo
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        //pasarlo al Action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  const { nombre, precio, id } = producto;

  //Funcion que redirige de forma programada
  const redirecionarEdicion = (producto) => {
    dispatch(ObtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redirecionarEdicion(producto)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
