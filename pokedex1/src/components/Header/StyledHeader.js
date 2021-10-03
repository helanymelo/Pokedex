
import styled from "styled-components";


export const Div = styled.div`
  text-align: center;
  
`
export const Img = styled.img`
  width: 10vw;
`
export const Title = styled.h1`
  font-family: SultanNahiaW20;
  position: relative;
  color: #000000;
 
`;
export const Button = styled.button`
  width: 148px;
  height: 38px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 18px;
  font-weight: 100;
      
  :hover {
   transition: 1s ease-in-out;
   background: #4F95DA;
  }

  :active {
    box-shadow: none;
  }
  font-family: SultanNahiaW20;
  font-size: 1.2em;
  margin-left: 5vw;
  position: absolute;
  top: 1;
  left: 0;
  @media(max-width: 540px){
    font-size: 1.2em;
  flex-direction: column;
  margin-left: 0vw;
  height: 4vh;
  left: none;
  top: 0;
  }
  
`;
export const Button2 = styled(Button)`
left: 1;
right: 0;
margin-left: 78vw;
@media(max-width: 540px){
  margin-left: 65vw;
  }
`

export const HeaderDiv = styled.div`
  height: 14vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media(max-width: 540px){
    flex-direction: column;
    height: 10vh;
  }
`;