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

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  
`

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

const CategoriesHeader = styled.h2`
  color: black;
  font-size: 1.25rem;
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

const FilterWrapper = styled.div`
  font-size: 16px;
  background: #d9dee1;
  padding: 20px;
  border-radius: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25vh;
  left: 15vw;
`

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const FilterItem = styled.li`
  margin-bottom: 5px;
`

const FilterLabel = styled.label`
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
`;

const FilterTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`

export default function modules() {
  // Navigation
  const router = useRouter();

  // Authentication
  initFirebase();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  let [selectedCategories, setSelectedCategories] = useState(new Set());
  let videoToCategories = new Map();

  // Videos
  const videos = [
    new Video('Test Title', "https://www.youtube.com/embed/J1U1h_EjkPs", [0,1,2]),
    new Video('Cool AI Video', "https://www.youtube.com/embed/nYqeHIRKboM", [3])
  ]

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

  const categories = ['Category 0', 'Category 1', 'Category 2', 'Category 3']
  const categoriesCSS = []
  categories.forEach((value, index) => {
    categoriesCSS.push(<FilterItem key={index}>
      <input type="checkbox" id={index.toString()} name={value} value={value} onChange={(event) => {
        const newSet = new Set(selectedCategories);
        if (event.target.checked) {
          newSet.add(parseInt(event.target.id));
        } else {
          newSet.delete(parseInt(event.target.id));
        }
        setSelectedCategories(newSet);
      }}/>
      <FilterLabel htmlFor={index.toString()}>{value}</FilterLabel>
    </FilterItem>)
  })

  const videosCSS = []
  videos.forEach((video, index) => {
    videosCSS.push(<div key={index}>
      <CategoriesHeader>{video.title}</CategoriesHeader>
      <VideoCSS src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></VideoCSS>
    </div>)
    videoToCategories.set(index, video.categoryIndices)
  })

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
          <Columns>
            <FilterWrapper>
              <FilterList>
                <FilterTitle>Filter by Category</FilterTitle>
                {categoriesCSS}
              </FilterList>
            </FilterWrapper>
            <Centered>
              <Title>Video Modules</Title>
              <VideosWrapper>
                {videosCSS.filter(item => {
                  if (selectedCategories.size === 0) {
                    return true;
                  }
                  const videoCategories = videoToCategories.get(parseInt(item.key))
                  let result = false;
                  selectedCategories.forEach(id1 => {
                    videoCategories.forEach(id2 => {
                      if (id1 === id2) {
                        result = true;
                      }
                    });
                  });
                  return result;
                })}
              </VideosWrapper>
            </Centered>
          </Columns>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

class Video {
  constructor(title, url, categoryIndices) {
    this.title = title;
    this.url = url;
    this.categoryIndices = categoryIndices;
  }
}