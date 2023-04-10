import React from 'react'

import { Container, Title, Image } from './NotFoundContainer.styled'

export const NotFoundContainer = () => (
  <Container>
    <Title>¡Lo sentimos!</Title>
    <Image src="/assets/images/warning.gif" alt="advertencia" />
    <p>No encontramos la página que estas buscando.</p>
  </Container>
)
