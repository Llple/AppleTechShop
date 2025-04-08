import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigation = useNavigate()
  React.useEffect(()=>{
    
    setTimeout(()=>
      {
      navigation("/")
    },250)
  },[])
  return (
    <div>404 - NotFound</div>
  )
}
