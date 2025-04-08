import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductInfo from "./components/ItemInfo";
import Cart from "./page/Cart";




function App() {
  

  return (
    <div className="App">
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
