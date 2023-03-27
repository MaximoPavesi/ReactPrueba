import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./pages/Categories/Categories";
import Form from "./pages/Form/Form";

import CartContext from "./context/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Sport Store";

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <Router>
            <Navbar />
            <Routes>
              <Route exact path="/">
                <Home greeting={greeting} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/item/:id">
                <ItemDetailPage />
              </Route>
              <Route path="/categories/:categoryId">
                <Categories />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Routes>
            <Footer />
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;