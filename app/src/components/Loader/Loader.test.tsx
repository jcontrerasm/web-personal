import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Loader } from './Loader'

describe('Loader component', () => {
  it('should show a loader', async () => {
    render(<Loader />)

    const loaderImage = screen.getByAltText('loader')

    expect(loaderImage).toBeInTheDocument()
  })
})
