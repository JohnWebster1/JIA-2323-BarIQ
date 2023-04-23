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

const Container = styled.div`
  background: white;
  margin: 0 auto;
  width: 100%;
`;

const Container2 = styled.div`
  background: white;
  width: auto;
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
        <title>Bar IQ | Documents</title>
        <meta name="description" content="The Document page for Bar IQ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>Documents</Title>
            <Container2>
              {/* This is where we can make a component page for  */}
            </Container2>
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
