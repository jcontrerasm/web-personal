import React from 'react'
import { Header } from '@components/Header'
import { ProductListContainer } from '@containers/ProductListContainer'

import { ContentWrapper } from './Inicio.styled'

const Inicio = () => (
  <div>
    <Header />
    <ContentWrapper>
      <ProductListContainer message="Product List"/>
    </ContentWrapper>
  </div>
)

export default Inicio
