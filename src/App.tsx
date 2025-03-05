import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CardItem from "./components/CardItem";
import axios from "axios";


export interface Products {
  id: string,
  imageUrl: string,
    title: string,
    colors: string[],
    storage: number[],
    price: number,
    category: number,
    rating: number,
    description: string
}

function App() {
  const [products,setProducts] = React.useState<Products[] >()
  
  
  React.useEffect(() => {
    const fetchProduct = async () =>{
      const {data} = await axios.get("https://679223c9cf994cc68048dbd6.mockapi.io/AppleTech")
      setProducts(data)
      
    }
    fetchProduct()
  }, []);

  return (
    <div className="App">
      <Header/>
      <Categories/>
      <div className="CardItemsBlock container">
        {products?.map(item => <CardItem {...item}/>)}
        
        

      </div>
    </div>
  );
}

export default App;
