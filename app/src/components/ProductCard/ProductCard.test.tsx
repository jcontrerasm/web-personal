import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { productMock } from '../../../mocks/test/product'
import { ProductCard } from './ProductCard'

describe('ProductCard component', () => {
  it('should show a product', async () => {
    render(<ProductCard productData={productMock}/>)

    const productCard = screen.getByAltText('accusamus beatae ad facilis cum similique qui sunt')

    expect(productCard).toBeInTheDocument()
  })
})
