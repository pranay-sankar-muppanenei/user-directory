import styled from 'styled-components'

export const R = styled.div`
  display: flex;
  width: 100vw;
`

export const C = styled.div`
  display: flex;
  background-color: ${props => (props.light ? 'transparent' : 'black')};
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`
export const I = styled.img`
  height: 300px;
  width: 300px;
`
export const He = styled.h1`
  color: ${props => (props.light ? 'black' : 'white')};
`
export const K = styled.p`
  color: #94a3b8;
  font-size: 20px;
`
