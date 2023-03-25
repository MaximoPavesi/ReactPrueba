import React from "react";
import {Switch, Route} from "react-router-dom";
import Inicio from "./Page/Inicio/index";
import {ProductosList} from "./Page/Productos";
import {ProductosDetalles} from "./Page/Productos/ProductoDetalles";

export default function Page() {
  return (
    <section>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
    </section>
  );
}