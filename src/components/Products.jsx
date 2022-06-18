import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

const Products = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/products")
    .then((res)=>res.json())
    .then((res)=> setData(res))
  },[])



return(<>

  <table>
    <thead>
      <td>id</td>
      <td>Name</td>
      <td>more Details</td>
    </thead>
    <tbody>

      {data.map((ele)=>{
        return(<>
          <tr>
            <td>{ele.id+1}</td>
            <td>{ele.name}</td>
            <td><Link to={`/products/${ele.id}`}>more</Link>
          </td>
          </tr>
        </>)
      })}

       
    </tbody>
  </table>

</>)

}

export default Products