import React from 'react'
import "../index.css"

export default function Cart() {
  return (
    <div className='cart container'>
      <ul className=''>
          <li className='border-2 border-dark-500'>
            <div  className='flex'>
              <h1  className='font-bold text-xl' >Title</h1>
              <img src="https://allopizza.su/storage/products/February2025/6IjL3ao4mrRQEvwFlWIu.webp" alt="" />
              
              <h2>Price</h2>
              <div className='flex'>
                <button>+</button>
                <button></button>
                <button>-</button>
              </div>
            
            </div>
          </li>
          
      </ul>
    </div>
  )
}
