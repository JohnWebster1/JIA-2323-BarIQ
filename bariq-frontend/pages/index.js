import Head from 'next/head'

import {useAuthState} from "react-firebase-hooks/auth";
import {initFirebase} from "../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useRouter} from "next/router";
import Layout from '../components/Sidebar/Layout';
import Footer from "../components/Footer";


export default function Home() {
    initFirebase()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth);
    const router = useRouter()

    if (loading) {
        return <div>Loading...</div>;
    }

    const logout = () => {
        auth.signOut().then(r => {
            if (!user) {
                router.push("/")
            }
        });
    }

    return (<div>
            <Head>
                <title>Bar IQ | Portal</title>
                <meta name="description" content="Bar IQ is a warehouse management software for beer warehouses."/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>
            {/* <Navbar loggedIn={user} logout={logout}/> */}
            
            
            {/* Layout */}
            <Layout loggedIn={user}/>

            <Footer/>
        </div>)
}
