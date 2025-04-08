import React from 'react'
import { Products } from '../redux/slices/itemsSlice'
import { Link } from 'react-router-dom'


const CardItem: React.FC<Products> = ({ id,
  imageUrl,
    title,
    colors,
    stock,
    price,
    category,
    rating,
    description} ) =>  {
  return (
    <Link to={`/product/${id}`}>
      <div className='card-item items-center flex-col flex justify-center'>
          
          <img className='card-item__image' src={imageUrl} alt="" />
          
          <h1 className='card-item__title'>{title}</h1>
      </div>
    </Link>
  )
}


export default CardItem