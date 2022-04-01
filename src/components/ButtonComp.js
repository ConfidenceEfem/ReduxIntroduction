import React,{useState} from "react"
import styled from "styled-components"
const ButtonComp = ({add, minus})=>{
    // const [counter, setCounter]= useState(0)

 
    return(
<CouterButton>
                <Button bg="red" cl="white" onClick={minus}>-</Button>
                <Button bg="blue" cl="white" onClick={add}>+</Button>
            </CouterButton>
    )
}
export default ButtonComp

const Button = styled.div`
padding: 5px 15px;
background-color: ${({bg})=>bg};
color: ${({cl})=>cl};
border-radius: 5px;
text-transform: scale(1);
transition:all 350ms;
cursor: pointer;

:hover{
    transform: scale(1.01);
}
`
const CouterButton = styled.div`
width: 60%;
display: flex;
margin-top: 50px;
justify-content: space-between;
`