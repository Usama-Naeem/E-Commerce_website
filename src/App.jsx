import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Filters from "./pages/Filters";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/filters" element={<Filters/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;