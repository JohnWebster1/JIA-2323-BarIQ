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
import RoiInput from "../components/RoiInput";

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
  font-size: 35px;
  height: 90px;
  width: 100vw;
  padding-top: 20px;
  font-weight: bold;
  color: #1b93d2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function RoiCalculator() {
  // Navigation
  const router = useRouter();

  // Form fields
  const [fields, setFields] = useState(Array(25).fill(0))

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
        <meta name="description" content="The ROI calculator for Bar IQ." />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Wrapper>
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>ROI Calculator Input Form</Title>
            <Container2>
              <RoiInput fields={fields} setFields={setFields} />
            </Container2>
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
