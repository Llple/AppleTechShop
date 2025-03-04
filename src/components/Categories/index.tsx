import React from 'react'

const Categories = () =>{
  const catigoriesItems = ["Apple IPhone","Apple IPad","Apple IMac","Apple AirPods"]

  return(
    <div >
      <ul className='categories'>
        {catigoriesItems.map(catigoriesItem =><li className='categories-item' >{catigoriesItem}
        </li>)}
        
      </ul>
    </div>
  )

}




export default Categories
