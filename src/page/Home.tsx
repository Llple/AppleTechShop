import React from 'react'
import Categories from '../components/Categories'
import axios from 'axios';
import CardItem from '../components/CardItem';
import { Products } from '../redux/slices/itemsSlice';
import { fetchTech } from '../redux/slices/itemsSlice';
import { useDispatch,useSelector } from 'react-redux';
import { stat } from 'fs';
import { AppDispatch, RootState } from '../redux/store';
import MyLoader from '../components/MyLoader';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const products    = useSelector((state: RootState)=> state.items.products)
  const loading   = useSelector((state: RootState)=> state.items.loading)
  const category = useSelector((state:RootState) => state.filter.category)
 
   
  
  React.useEffect(() => {
    
    dispatch(fetchTech({category}))
  }, [category]);
  return (
    <>
      <Categories/>
      <div className="CardItemsBlock container">
        {loading==="success" ? products?.map(item =>   <CardItem {...item}/> ) : [...new Array(10)].map((_,index) => <MyLoader/>) }
        
        

      </div>
    </>
  )
}
