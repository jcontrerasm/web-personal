import React from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '@components/Navbar'

const ProductItem = () => {
  const { query: { id } } = useRouter();

  return (
    <div>
      <h1>Product: {id}</h1>
      <Navbar />
    </div>
  )
}

export default ProductItem
