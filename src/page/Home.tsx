import React from 'react'
import Categories from '../components/Categories'
import axios from 'axios';
import CardItem from '../components/CardItem';
import { Products } from '../redux/slices/itemsSlice';

export default function Home() {
  const [products,setProducts] = React.useState<Products[] >()
  
  
  React.useEffect(() => {
    const fetchProduct = async () =>{
      const {data} = await axios.get("https://679223c9cf994cc68048dbd6.mockapi.io/AppleTech")
      setProducts(data)
      
    }
    fetchProduct()
  }, []);
  return (
    <>
      <Categories/>
      <div className="CardItemsBlock container">
        {products?.map(item => <CardItem {...item}/>)}
        
        

      </div>
    </>
  )
}
