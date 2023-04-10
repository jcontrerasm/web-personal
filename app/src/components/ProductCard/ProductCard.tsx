import React from 'react'

import { Container, Image, Info } from './ProductCard.styled'
import { Props } from './interfaces'

export const ProductCard: React.FC<Props> = ({ productData }) => {
  const { url, title, totalPrice } = productData

  return (
    <div>
      <Container>
        <Image src={url} alt={title} />
        <Info>
          <span>{title}</span>
          <p>Price: S/ {totalPrice}.00</p>
        </Info>
      </Container>
    </div>
  )
}
