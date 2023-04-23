import Head from "next/head";
import { useEffect, useState } from "react";
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
  background: white;
  margin: 0 auto;
  width: 100%;
`;

const Container2 = styled.div`
  background: white;
  width: auto;
  padding: 10px;
`;

const Title = styled.h1`
  background: white;
  text-align: center;
  font-size: 35px;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  font-weight: bold;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const RoiButton = styled.a`
  color: white;
  background: #1a1d4a;
  font-size: 20px;
  padding: 5px 13px;
  border-radius: 200px;
  border-color: #1a1d4a;
  border-style: solid;
  border-width: 1.95px;
  transition: 0.5s;

  &:hover {
    background: #2a81e5;
    color: white;
  }
`;

const AWrapper = styled.a`
  margin-bottom: 40px;
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
        <meta name="description" content="The ROI page for Bar IQ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>ROI Calculator</Title>
            <Container2>
              <RoiPage />
            </Container2>
            <AWrapper href="/roi-calculator">
              <RoiButton> Go To Calculator</RoiButton>
            </AWrapper>
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
