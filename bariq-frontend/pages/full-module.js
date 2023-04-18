import Head from "next/head";
import {initFirebase} from "../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useRouter} from "next/router";

import Navbar from "../components/Navbar";
import Centered from "../components/Centered";

import {useAuthState} from "react-firebase-hooks/auth";

import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  background: #e7edf2;
  margin: 0 auto;
  width: 100%;
`;

const VideosWrapper = styled.div`
  margin-top: 20px;
  width: auto;
`;

const VideoCSS = styled.iframe`
  margin-bottom: 50px;
  width: 560px;
  height: 315px;

  // max width 900px
  @media (max-width: 768px) {
    width: 373px;
    height: 210px;
  }
`

const VideoTitle = styled.h2`
  color: black;
  font-size: 1.25rem;
  padding-bottom: 10px;
  display: flex;
  font-weight: bold;
`;

const Title = styled.h1`
  background: #e7edf2;
  text-align: center;
  font-size: 30px;
  height: 60px;
  width: 100%;
  padding-top: 20px;
  font-weight: bold;
  color: #1b93d2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Modules() {
    // Authentication
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    // Navigation
    const router = useRouter();
    let titles = router.query.titles;
    let links = router.query.links;
    if (typeof titles === 'string') {
        titles = [titles];
    }
    if (typeof links === 'string') {
        links = [links];
    }

    if (titles === undefined || links === undefined) {
        return <Centered>
            <VideosWrapper>
                <VideoTitle>
                    An error occurred. Please go back and try again.
                </VideoTitle>
            </VideosWrapper>
        </Centered>
    }

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

    function embedYoutubeLink(link) {
        const id = link.split('v=')[1];
        return `https://www.youtube.com/embed/${id}`;
    }

    const videosCSS = []
    titles.forEach((title, i) => {
        videosCSS.push(<div key={i}>
            <VideoTitle>{title}</VideoTitle>
            <VideoCSS src={embedYoutubeLink(links[i])}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></VideoCSS>
        </div>)
    });

    return (
        <div>
            <Head>
                <title>Bar IQ | Video Modules</title>
                <meta name="description" content="The Video Modules page for Bar IQ."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Wrapper>
                <Sidebar id={'modules-1'}/>
                <Container>
                    <Navbar loggedIn={user} logout={logout}/>
                    <Centered>
                        <Title>Video Modules</Title>
                        <VideosWrapper>
                            {videosCSS}
                        </VideosWrapper>
                    </Centered>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    );
}