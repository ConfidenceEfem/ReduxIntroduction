import React,{useState} from "react"
import styled from 'styled-components' 
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import CircleComp from "./CircleComp"
import ButtonComp from "./ButtonComp"
import InputComp from "./InputComp"
import {addCounter, minusCounter} from "./Global/MainGlobal"

const Home = ()=>{


    return(
        <Container>
        <InputComp/>
            <Card>
            <CircleComp/>
            <ButtonComp />
            </Card>
        </Container>
    )
}
export default Home

const Card = styled.div`
align-items: center;
width: 350px;
height: 500px;
display: flex;
flex-direction: column;
background-color: white;
box-shadow: lightgray 1px 1px 5px 1px;
border-radius: 10px;
justify-content: center;
`
const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #eee;
`