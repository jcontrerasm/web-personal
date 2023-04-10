import * as React from 'react'

import { Container, Image, Message } from './Loader.styled'
import { Props } from './interfaces'

export const Loader: React.FC<Props> = ({ image, message }) => {
  const srcImage = image ?? '/assets/images/loader_2.gif'

  return (
    <Container>
      <Image src={srcImage} alt="loader" />
      { message && <Message>{message}</Message>}
    </Container>
  )
}
