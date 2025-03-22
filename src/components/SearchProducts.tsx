import React, { FC } from 'react'
import { useNavigate } from "react-router-dom";
import { Products } from '../redux/slices/itemsSlice';


   
 

const SearchProducts:React.FC<Products> = (props)=>{
    return (
        <div className='block-product'>
            <img src={props.imageUrl} alt="" height={50} />
            <h2>{props.title}</h2>
            <h2 className='searching-product-price'>{props.price}$</h2>
    
        </div>
      )
}
export default SearchProducts