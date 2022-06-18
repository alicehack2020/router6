import React, { useEffect, useState } from 'react'
const Products = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/products")
    .then((res)=>res.json())
    .then((res)=> setData(res))
  },[])


 



  
  
}

export default Products