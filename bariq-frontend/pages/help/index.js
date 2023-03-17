import Head from "next/head";
import {useEffect, useState} from "react";
import {initFirebase} from "../../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Centered from "../../components/Centered";
import {useAuthState} from "react-firebase-hooks/auth";
import Articles from "../../components/Articles/ArticlesPreview";
import {getArticles, getCategories} from "../../util/getArticles";
import SearchBar from "../../components/Articles/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Container = styled.div`
  background:  #E7EDF2;
  width: 100%;
`;

const Title = styled.h1`
background: #e7edf2;
text-align: center;
font-size: 30px;
height: 60px;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
font-weight: bold;
color: #1b93d2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Index() {
    // Navigation
    const router = useRouter();

    // Authentication
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    // Get articles
    const [originalData, setOriginalData] = useState(new Map());
    const [articlesComponent, setArticlesComponent] = useState(<>Loading...</>);
    const [categories, setCategories] = useState(new Map());
    useEffect(() => {
        getCategories().then((cat) => {
            setCategories(cat)
            getArticles().then((data) => {
                if (data !== undefined) {
                    setOriginalData(data);
                    setArticlesComponent(<Articles data={data} router={router} categories={cat}/>);
                }
            });
        });
    }, []);


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
                <title>Bar IQ | Help</title>
                <meta name="description" content="The help page for Bar IQ."/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <Wrapper>
                <Sidebar/>
                <Container>
                    <Navbar loggedIn={user} logout={logout}/>
                    <Centered>
                        <Title>RFID Search Engine</Title>
                        <SearchBar
                            key="searchbar"
                            onChange={(e) => {
                                const input = e.target.value.trim().toLowerCase();
                                const tempData = new Map();
                                originalData.forEach((value, key) => {
                                    if (value.title.toLowerCase().trim().includes(input)) {
                                        tempData.set(key, value);
                                    }
                                });

                                // If no articles have a title containing input, start searching content
                                if (tempData.size === 0) {
                                    originalData.forEach((value, key) => {
                                        if (value.content.toLowerCase().includes(input)) {
                                            tempData.set(key, value);
                                        }
                                    });
                                }
                                setArticlesComponent(
                                    <Articles data={tempData} router={router} categories={categories}/>
                                );
                            }}
                        />
                        {articlesComponent}
                    </Centered>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    );
}
