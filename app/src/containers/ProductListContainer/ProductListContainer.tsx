import React from 'react'
import { useService } from '@hooks/useService'
import { productService } from '@services/productService'
import { Loader } from '@components/Loader'
import { ProductCard } from '@components/ProductCard'
import { COMPONENT_MESSAGES } from '@utils/constants/messages'
import { ProductModel } from '@interfaces/models/productModel'

import { ProductList } from './ProductListContainer.styled'
import { Props } from './interfaces'

export const ProductListContainer: React.FC<Props> = ({ message }) => {
  const { data, isLoading, error } = useService<ProductModel[]>([], productService.findAll())

  if (isLoading) return <Loader />
  if (error) return <div>{COMPONENT_MESSAGES.ES.ERROR}</div>

  return (
    <div>
      <h3>{ message }</h3>
      <ProductList>
        { data.map((product) => (
            <ProductCard
              key={product.id}
              productData={product}
            />
          ))
        }
      </ProductList>
    </div>
  )
}
