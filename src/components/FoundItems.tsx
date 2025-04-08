import React from 'react'
import { Products } from '../redux/slices/itemsSlice';


   
 

const SearchProducts:React.FC<Products> = (props)=>{
    return (
        <div className='found-items'>
            <img src={props.imageUrl} alt=""  className='found-items__image'/>
            <h2 className='found-items__title'>{props.title}</h2>
            <h2 className='found-items__price'>{props.price}$</h2>
    
        </div>
      )
}
export default SearchProducts