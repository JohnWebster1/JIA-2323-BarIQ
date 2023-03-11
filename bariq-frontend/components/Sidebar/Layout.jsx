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
  background: white;
  text-align: center;
  font-size: 25px;
  font-family: normal 400;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
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
                {props.loggedIn ? <Title>Welcome {props.loggedIn.displayName}! </Title> : <></>}
                <div className='bg-secondary flex-1 p-4 text-black'>
                  <Home/>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Layout;
