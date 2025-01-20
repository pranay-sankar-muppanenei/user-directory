import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.Active ? 'black' : '#f0f4fa')};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const Cardcontainer = styled.div`
  margin-top: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #272727;
  border-radius: 15px;
  padding: 20px;
  @media screen and (max-width: 767px) {
    margin-left: 15px;
  }
`
export const Moonbut = styled.button`
  color: black;
  font-size: 50px;
  background-color: red;
  border: none;
`
export const Sunbut = styled.button`
  color: white;
  font-size: 50px;
  background-color: red;
  border: none;
`
export const Butta = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.Active ? 'white' : 'black')};
  font-size: 40px;
  margin-top: 30px;
  margin-left: 20px;
`
