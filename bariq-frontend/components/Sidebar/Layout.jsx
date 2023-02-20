import React from 'react'
import Sidebar from './Sidebar'
import Home  from "../Home.js"
import Navbar from '../Navbar'
import styled from 'styled-components'


const Container = styled.div`
  background: #DBE2E9;
  width: 100%;
`;
const Title = styled.h1`
background: #DBE2E9;
text-align: center;
font-size: 20px;
height: 60px;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
`;

const Layout = (props) => {
    return (
        <div className='h-screen flex flex-row justify-start'>
            <Sidebar />
            <Container>
                <Navbar loggedIn={props.user} logout={props.logout}/>
                <Title>Interactive Resource Portal</Title>
                {props.loggedIn ? <Title>Welcome {props.loggedIn.displayName}! </Title>: <></>}
                <div className='bg-secondary flex-1 p-4 text-black'>
                    
                    <Home/>
                    
                </div>
            </Container>
        </div>
    )
}

export default Layout;
