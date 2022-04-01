import React from "react"
import styled from "styled-components"
const CircleComp = ({counter})=>{
    return(
        <Profile>{counter}</Profile>
    )
}
export default CircleComp

const Profile = styled.div`
width: 160px;
height: 160px;
object-fit: cover;
background-color: gray;
margin-top: 20px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items:center;
font-size: 35px;
font-family: hobo std;
color: white;
`