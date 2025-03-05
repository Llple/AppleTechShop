import React from 'react'

const Categories = () =>{
  const catigoriesItems = ["All","Apple IPhone","Apple IPad","Apple IMac","Apple AirPods"]
  const [gategoryIdx,setGategoryIdx] = React.useState(0)

  const onClickCategory = (idx : number) =>{
    setGategoryIdx(idx)
    
  }

  return(
    <div >
      <ul className='categories container'>
        {catigoriesItems.map((catigoriesItem,index) =><li className={index===gategoryIdx?'categories-item active' :'categories-item'} onClick={()=>{onClickCategory(index)}}>{catigoriesItem}
        </li>)}
        
      </ul>
    </div>
  )

}


export default Categories
