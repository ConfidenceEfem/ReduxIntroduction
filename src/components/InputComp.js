import React from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {myName, myEmail} from "./Global/InputReducer"
const InputComp = ()=>{
    const dispatch = useDispatch()
    return(
        <Container>
        <Inputs placeholder="Please enter your name"
        onChange={(e)=>{
            dispatch(myName(e.target.value))
        }}/>
        <Inputs placeholder="Please enter your email"
        onChange={(e)=>{
            dispatch(myEmail(e.target.value))
        }}/>
        <Button>Submit</Button>
        </Container>
    )
}
export default InputComp

const Button = styled.div`
width: 350px;
height: 35px;
background-color: red;
border: none;
color: white;
/* outline: 2px gray bold; */
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
transition:all 350ms;
text-transform: scale(1);
cursor: pointer;
margin: 5px 0;
:hover{
    background-color: lightgray;
    transform: scale(1.02);
}
`
const Inputs = styled.input`
width: 350px;
height: 35px;
background-color: white;
border: none;
outline: 2px gray bold;
margin: 5px 0;
`

const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;

`