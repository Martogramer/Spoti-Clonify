import React from "react";
import styled from 'styled-components'
import styles from './Login.module.css'

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: #000;
& img {
    width: 100%;
}
`
const Button = styled.a`
padding: 20px;
background-color: #1db954;
border-radius: 90px;
color: #fff;
text-decoration: none;
text-transform: uppercase;
font-weigth: bolder;
`

const Login=()=>{
    return(
        <Container>

            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify" />
            <Button href="#">login with spotify</Button>
        </Container>
    )
}
export default Login