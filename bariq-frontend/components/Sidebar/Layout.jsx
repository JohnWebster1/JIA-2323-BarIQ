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
  font-size: 38px;
  font-weight: 700;
  color: #1b93d2;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  border-radius: 2px;
  border-color: black;
  padding: 3rem 1rem 4rem;
  // background-image:linear-gradient(180deg, rgba(19,47,67,1) 0%, rgba(74,96,113,1) 0%, rgba(111,130,143,1) 1%, rgba(123,141,153,1) 4%, rgba(138,154,165,1) 13%, rgba(168,181,190,1) 34%, rgba(231,237,242,1) 100%);
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
