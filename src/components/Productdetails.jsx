import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Productdetails = () => {
const {id}=useParams()
console.log(id);

 const [data,setData]=useState([])


useEffect(()=>{
  fetch(`http://localhost:3004/products/${id}`).then((res)=>res.json()).then((res)=>{
    setData(res)
  })
},[])



  return (
    <>
        <div>{data.id+1}</div>
        <div>{data.name}</div>
        <div>{data.price}</div>
    </>
   
  )
}

export default Productdetails