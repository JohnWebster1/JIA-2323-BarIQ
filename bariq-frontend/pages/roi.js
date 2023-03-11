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
  width: 100%;
`;

const Title = styled.h1`
  background: #e7edf2;
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
            <RoiPage/>
            <ol>
            <li>Enter budget</li>
            <li>Enter warehouse size</li>
            <li>Enter RFID Purchase</li>
        </ol>
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
