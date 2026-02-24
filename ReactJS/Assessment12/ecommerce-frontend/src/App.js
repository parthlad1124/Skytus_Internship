import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";


function App(){
  return(
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/product/:id" element = {<ProductDetails />}/>
          <Route path = "/Cart" element = {<Cart />}/>
        </Routes>
      </Router>
      </CartProvider>
  );
}

export default App;
