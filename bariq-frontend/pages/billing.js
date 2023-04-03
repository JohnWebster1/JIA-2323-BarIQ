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
  background: #e7edf2;
  margin: 0 auto;
  width: 100%;
`;

const Container2 = styled.div`
  background: #e7edf2;
  width: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #1b93d2;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #1b93d2;
  padding-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
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
        <title>Bar IQ | Billing</title>
        <meta name="description" content="The Billing page for Bar IQ." />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>Billing</Title>
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
