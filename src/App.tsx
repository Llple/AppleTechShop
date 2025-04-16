import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductInfo from "./components/ItemInfo";
import Cart from "./page/Cart";
import Login from "./page/Login";
import ProtectedAdminPanel from "./page/ProtectedAdminPanel";




function App() {
  

  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/adminPanel" element={<ProtectedAdminPanel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      

    </div>
  );
}

export default App;
