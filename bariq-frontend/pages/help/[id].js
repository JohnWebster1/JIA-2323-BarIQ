import {initFirebase} from "../../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {getArticleById} from "../../util/getArticles";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Centered from "../../components/Centered";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import Article from "../../components/Articles/Article";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Wrapper = styled.div`
    background: white;
`;

export default function Index() {
    // Authentication
    initFirebase()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth);

    // Get article
    const router = useRouter();
    const {id} = router.query;
    const [articleComponent, setArticleComponent] = useState(<>Loading...</>);
    const [articleLoaded, setArticleLoaded] = useState(false);
    useEffect(() => {
        if (id !== undefined) {
            getArticleById(id).then(data => {
                setArticleLoaded(true);
                if (data === undefined) {
                    setArticleComponent(<h1>Article not found.</h1>);
                } else {
                    setArticleComponent(<Article data={data}/>);
                }
            });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const logout = () => {
        auth.signOut().then(() => {
            if (!user) {
                router.push("/");
            }
        });
    }

    return (<Wrapper>
        <Head>
            <title>Bar IQ | Help</title>
            <meta name="description" content="The help page for Bar IQ."/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Navbar loggedIn={user} logout={logout}/>

        <Centered>
            {articleComponent}
        </Centered>
        {articleLoaded && <Footer/>}
    </Wrapper>)
}
