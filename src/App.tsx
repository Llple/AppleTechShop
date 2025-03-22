import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import NotFounf from "./components/NotFounf";
import ProductInfo from "./components/ProductInfo";




function App() {
  

  return (
    <div className="App">
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFounf/>} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        
      </Routes>
    </div>
  );
}

export default App;
