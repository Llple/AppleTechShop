import React from 'react'
import { Products } from '../../redux/slices/itemsSlice'
import { Link } from 'react-router-dom'


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
    <Link to={`/product/${id}`}>
      <div className='cardItem'>
          
          <img className='cardItem-image' src={imageUrl} alt="" />
          
          <h1 className='cardItem-title'>{title}</h1>
      </div>
    </Link>
  )
}


export default CardItem