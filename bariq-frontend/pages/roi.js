import Head from "next/head";
import {useEffect, useState} from "react";
import { initFirebase } from "../util/firebaseApp";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import Centered from "../components/Centered";

import { useAuthState } from "react-firebase-hooks/auth";

import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import RoiPage from "../components/RoiPage";


const Container = styled.div`
  background: #e7edf2;
`;

const Container2 = styled.div`
  background: #e7edf2;
  width: auto;
`;

const Title = styled.h1`
  background: #e7edf2;
  text-align: center;
  font-size: 30px;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  font-weight: bold;
  color: #1b93d2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const RoiButton = styled.a`
  color: #e7edf2;
  background: #1A1D4A;
  font-size: 20px;
  padding: 5px 13px;
  border-radius: 200px;
  border-color: #1A1D4A;
  border-style: solid;
  border-width: 1.95px;
  transition: .5s;
  text-color: black;

  &:hover {
    background: #2a81e5;
    color: #E7EDF2;
  }
`;
export default function ROI() {
  // Navigation
  const router = useRouter();
  
  // Authentication
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  






  if (loading) {
    return <div>Loading...</div>;
  }

  const logout = () => {
    auth.signOut().then(() => {
      if (!user) {
        router.push("/");
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Bar IQ | ROI Calculator</title>
        <meta name="description" content="The ROI page for Bar IQ."/>
        <link rel="icon" href="../public/favicon.ico"/>
      </Head>

      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered> 
            <Title>ROI Calculator</Title>
            <Container2>
              <RoiPage/>
            </Container2>
            <RoiButton> Go To Calculator</RoiButton>

          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
