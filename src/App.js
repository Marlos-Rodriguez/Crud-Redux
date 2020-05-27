import React from "react";

import Header from "./Components/Header";
import Productos from "./Components/Productos";
import NuevoProducto from "./Components/NuevoProducto";
import EditarProducto from "./Components/EditarProducto";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
