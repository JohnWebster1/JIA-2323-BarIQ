import React from 'react'
import Sidebar from './Sidebar'
import Home from "../Home.js"
import Navbar from '../Navbar'
import styled from 'styled-components'


const Container = styled.div`
  background: #E7EDF2;
  width: 100%;
`;
const Title = styled.h1`
  background: #E7EDF2;
  text-align: center;
  font-size: 20px;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Layout = (props) => {
    return (
        <Wrapper>
            <Sidebar/>
            <Container>
                <Navbar loggedIn={props.user} logout={props.logout}/>
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
