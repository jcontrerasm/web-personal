import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const bodyStyle: object = {
  position: 'relative',
  margin: 0
}

class CustomDocument extends Document {

  public render() {
    return (
      <Html>
        <Head />
        <body style={bodyStyle}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
