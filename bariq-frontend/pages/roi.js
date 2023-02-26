import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "../util/firebaseApp";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Centered from "../components/Centered";

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
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

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
      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>ROI Calculator</Title>
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
