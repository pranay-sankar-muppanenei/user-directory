import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const Bang = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 200px;
  align-items: center;
  height: 30vh;
`
export const Sidebar = styled.div`
  width: 20vw;
  min-height: 30vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.Active ? 'black' : '#f0f4fa')};
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    min-width: 100vw;
  }
`
export const Naming = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.Active ? 'white' : 'black')};
  font-size: 20px;
`

export const Rad = styled.div`
  display: flex;
  flex-direction: column;
`
export const Mt = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`
export const Label = styled.label`
  color: ${props => (props.Active ? 'white' : 'black')};
`
export const Mainbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: ${props => (props.Active ? 'black' : '#f0f4fa')};
  min-height: 100vh;
  padding: 20px;
  @media screen and (max-width: 767px) {
    min-width: 100vw;
  }
`
export const Usercontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`
export const Searchcontainer = styled.div`
  width: 300px;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`
export const Searchcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 20%;
  background-color: ${props => (props.Active ? '#121212' : 'grey')};
  border-color: white;
  border-width: 1px;
  border-style: solid;
  outline: none;
`
export const Search = styled.input`
  width: 80%;
  height: 35px;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: #b6c5ff;
  padding: 10px;
  border-radius: 3px;
  font-size: 13px;
  outline: none;
`
export const Searchimg = styled.img`
  height: 18px;
  width: 18px;
  color: white;
`
export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Moonbut = styled.button`
  color: black;
  font-size: 50px;
  background-color: transparent;
  border: none;
`
export const Sunbut = styled.button`
  color: white;
  font-size: 50px;
  background-color: transparent;
  border: none;
`
export const Kevvu = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`
export const Kevvuu = styled.div`
  display: flex;
`
