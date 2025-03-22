import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { AppDispatch,RootState } from '../../redux/store';
import { setCategory } from '../../redux/slices/filterSlice'; 


const Categories = () =>{
  const category : number  = useSelector((state:RootState) => state.filter.category)
  const dispatch = useDispatch<AppDispatch>()


  const catigoriesItems = ["All","Apple IPhone","Apple MacBook","Apple IPad","Apple Watch","Apple AirPods","Apple IMac","Apple TV"]

  const onClickCategory = (idx : number) =>{
    dispatch(setCategory(idx))
    
    
  }

  return(
    <div >
      <ul className='categories container'>
        {catigoriesItems.map((catigoriesItem,index) =><li className={index===category?'categories-item active' :'categories-item'} onClick={()=>{onClickCategory(index)}}>{catigoriesItem}
        </li>)}
        
      </ul>
    </div>
  )

}


export default Categories
