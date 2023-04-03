import React from 'react'
import Sidebar from './Sidebar'
import Home from "../Home.js"
import Navbar from '../Navbar'
import styled from 'styled-components'

const Container = styled.div`
  background: #e7edf2;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #1b41F2;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  padding: 2rem 1rem;
  background-image: radial-gradient(circle at 30% 107%, #c5d5e5, #e7edf2 80%);
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1.0);
`;

const Title2 = styled.h1`
background: #e7edf2;
text-align: center;
font-size: 20px;
height: 60px;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
font-weight: bold;
color: #1b93d2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #e7edf2;
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
