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
        console.log("Logging out...")
        auth.signOut().then(() => {
            if (!user) {
                router.push("/")
            }
        });
    }

    return (<div>
            <Head>
                <title>Bar IQ | Portal</title>
                <meta name="description" content="Bar IQ is a warehouse management software for beer warehouses."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            
            
            {/* Layout */}
            <Layout loggedIn={user} logOut={logout}/>

            <Footer/>
        </div>)
}
