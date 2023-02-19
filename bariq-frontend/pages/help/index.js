import Head from 'next/head'
import {useEffect, useState} from "react";
import {initFirebase} from "../../util/firebaseApp";
import { getAuth } from "firebase/auth";
import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Centered from "../../components/Centered";
import {useAuthState} from "react-firebase-hooks/auth";
import Articles from "../../components/Articles/ArticlesPreview";
import {getArticles} from "../../util/getArticles";
import SearchBar from "../../components/Articles/SearchBar";

export default function Index() {
    // Navigation
    const router = useRouter()

    // Authentication
    initFirebase()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth);

    // Get articles
    const [originalData, setOriginalData] = useState(new Map());
    const [articlesComponent, setArticlesComponent] = useState(<>Loading...</>);
    useEffect(() => {
        getArticles().then(data => {
            if (data !== undefined) {
                setOriginalData(data);
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
            <SearchBar onChange={e => {
                const input = e.target.value.trim().toLowerCase();
                const tempData = new Map()
                originalData.forEach((value, key) => {
                    if (value.title.toLowerCase().trim().includes(input)) {
                        tempData.set(key, value);
                    }
                })

                // If no articles have a title containing input, start searching content
                if (tempData.size === 0) {
                    originalData.forEach((value, key) => {
                        if (value.content.toLowerCase().includes(input)) {
                            tempData.set(key, value);
                        }
                    })
                }
                setArticlesComponent(<Articles data={tempData} router={router}/>);
            }}/>
            {articlesComponent}
        </Centered>
    </div>)
}
