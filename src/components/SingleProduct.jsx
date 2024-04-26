import React from 'react'
import { useEffect, useState } from 'react'

export default function SingleProduct() {
  const [product, setProduct] = useState([])

  let getProduct = () => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then(res => res.json())
      .then(res => setProduct(res.products))
  }


  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>SingleProduct</div>
  )
}
