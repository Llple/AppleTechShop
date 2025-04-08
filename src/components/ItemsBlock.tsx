import React from 'react'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'
import MyLoader from './MyLoader'

export default function ItemsBlock() {
    const products    = useSelector((state: RootState)=> state.items.products)
    const loading   = useSelector((state: RootState)=> state.items.loading)
  return (
    <div className="items-block ">
            {loading==="success" ? products?.map(item =>   <CardItem {...item}/> ) : [...new Array(10)].map((_,index) => <MyLoader/>) }
            
            
    
          </div>
  )
}
