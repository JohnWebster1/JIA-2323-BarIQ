import Head from "next/head";
import { initFirebase } from "../util/firebaseApp";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import Centered from "../components/Centered";

import { useAuthState } from "react-firebase-hooks/auth";

import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Collapsible from "react-collapsible";
import { getVideoModules } from "../util/getVideos";
import { useEffect, useState } from "react";
import { PlayIcon } from "../components/sidebar-icons";

const Container = styled.div`
  background: #e7edf2;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  background: #e7edf2;
  text-align: center;
  font-size: 35px;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  font-weight: bold;
  color: #1b93d2;
  margin-bottom: 30px;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 18px;
  width: 50vw;
  padding: 20px;
  color: black;
  border: 1px solid #000;
  background: white;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExpandButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid #000;
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const MyContent = styled.div`
  background-color: white;
  padding: 10px 10px 10px 25px;
  font-size: 14px;
  width: 50vw;
  border: 1px solid #000;
  border-top: none;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCollapsible = styled(Collapsible)`
  width: 50vw;
`;

const VideoTitle = styled.h2`
  font-size: 16px;
  margin-left: 10px;
`;

const FullModule = styled(VideoTitle)`
  text-decoration: underline;
`;

export default function Modules() {
  // Navigation
  const router = useRouter();
  const [sectionsCSS, setSectionsCSS] = useState([]);

  // Sections
  useEffect(() => {
    getVideoModules().then((videoModulesMap) => {
      let newSectionsCSS = [];
      for (const section of videoModulesMap.keys()) {
        const titles = videoModulesMap.get(section).titles;
        const links = videoModulesMap.get(section).links;
        const onClick = () => {
          router.push({
            pathname: "/full-module",
            query: { titles, links },
          });
        };

        const sectionVideos = [];
        sectionVideos.push(
          <button onClick={onClick}>
            <FullModule>View Full Module</FullModule>
          </button>
        );
        links.forEach((link, index) => {
          sectionVideos.push(
            <button onClick={() => window.open(link, "_blank")}>
              <Row>
                <PlayIcon/>
                <VideoTitle>{titles[index]} • 1 min</VideoTitle>
              </Row>
            </button>
          );
        });
        newSectionsCSS.push(
          <StyledCollapsible
            id={section}
            trigger={<ExpandButton>{section}</ExpandButton>}
          >
            <MyContent>{sectionVideos}</MyContent>
          </StyledCollapsible>
        );
      }
      setSectionsCSS(newSectionsCSS);
    });
  }, [router]);

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
        <title>Bar IQ | Video Modules</title>
        <meta name="description" content="The Video Modules page for Bar IQ." />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Wrapper>
        <Sidebar />
        <Container>
          <Navbar loggedIn={user} logout={logout} />
          <Centered>
            <Title>Video Modules</Title>
            <Subtitle>
              This Video Modules page hosts educational videos designed to help
              individuals learn about the tools and services that Bar IQ offers.
              Below, you have a list of possible modules that you could engage
              in to start learning about the Bar IQ product. You can either
              click on the link provided under the module or navigate to the
              full module page. When you click on the link, you will be brought
              to the original page of the video. When you navigate to the full
              module page, you will be able to see all videos in the module
              embedded through the website such that you can interact as though
              you are on the original page of the video. Try to look through as
              many modules as possible!
            </Subtitle>
            {sectionsCSS}
          </Centered>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
