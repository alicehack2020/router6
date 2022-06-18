import React from 'react'
// Home - /
// All Products - /products
// Product details - /products/:id
import { Link } from "react-router-dom";

const NabBar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
    </div>
  )
}

export default NabBar