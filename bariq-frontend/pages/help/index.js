import Head from 'next/head'
import {useEffect, useState} from "react";
import {initFirebase} from "../../util/firebaseApp";
import { getAuth } from "firebase/auth";
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Centered from "../../components/Centered";
import {useAuthState} from "react-firebase-hooks/auth";
import Articles from "../../components/ArticlesPreview";
import {getArticles} from "../../util/getArticles";

export default function Index() {
    // Navigation
    const router = useRouter()

    // Authentication
    initFirebase()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth);

    // Get articles
    const [articlesComponent, setArticlesComponent] = useState(<>Loading...</>);
    useEffect(() => {
        getArticles().then(data => {
            if (data !== undefined) {
                setArticlesComponent(<Articles data={data} router={router}/>);
            }
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const logout = () => {
        auth.signOut().then(() => {
            if (!user) {
                router.push("/")
            }
        });
    }

    return (<div>
        <Head>
            <title>Bar IQ | Help</title>
            <meta name="description" content="The help page for Bar IQ."/>
            <link rel="icon" href="../public/favicon.ico"/>
        </Head>

        <Navbar loggedIn={user} logout={logout}/>

        <Centered>
            <h1>Optimize your warehouse.</h1>
            {articlesComponent}
        </Centered>
    </div>)
}
