import React from 'react'
import Sidebar from './Sidebar'
import Home from "../Home.js"
import Navbar from '../Navbar'
import styled from 'styled-components'

const Container = styled.div`
  background: white;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #2E2E2F;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  border-radius: 2px;
  border-color: black;
  padding: 3rem 1rem 4rem;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
`;

const Title2 = styled.h1`
background: white;
text-align: center;
font-size: 20px;
height: 60px;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
font-weight: bold;
color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
`;

const Layout = (props) => {
    return (
        <Wrapper>
            <Sidebar/>
            <Container>
                <Navbar loggedIn={props.loggedIn} logout={props.logOut}/>
                <Title>Interactive Resource Portal</Title>
                {props.loggedIn ? <Title2>Welcome {props.loggedIn.displayName}! </Title2> : <></>}
                <div className='bg-secondary flex-1 p-4 text-black'>
                  <Home/>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Layout;
