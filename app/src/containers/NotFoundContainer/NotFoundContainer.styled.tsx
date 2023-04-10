import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  min-width: 320px;
  color: #444;
`

export const Image = styled.img`
  width: 300px;
`

export const Title = styled.p`
  margin: 20px 0;
  font-size: 32px;
  line-height: 34px;
  font-weight: 700;
`
