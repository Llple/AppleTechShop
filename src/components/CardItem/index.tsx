import React from 'react'
import { Products } from '../../redux/slices/itemsSlice'


const CardItem: React.FC<Products> = ({ id,
  imageUrl,
    title,
    colors,
    storage,
    price,
    category,
    rating,
    description} ) =>  {
  return (
    <div className='cardItem'>
        
        <img className='cardItem-image' src={imageUrl} alt="" />
        
        <h1 className='cardItem-title'>{title}</h1>
    </div>
  )
}


export default CardItem