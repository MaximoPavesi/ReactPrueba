import React from 'react'
import {Header} from "./componentes/Header";
import {Carrito} from "./componentes/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Page from "./componentes/Page";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Page />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
