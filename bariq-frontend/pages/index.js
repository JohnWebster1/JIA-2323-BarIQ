import Head from 'next/head'
import Navbar from "../components/Navbar";
import Centered from "../components/Centered";
import {useAuthState} from "react-firebase-hooks/auth";
import {initFirebase} from "../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useRouter} from "next/router";
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Layout from '../components/Sidebar/Layout';

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

            {/*<Navbar loggedIn={user} logout={logout}/> */}
            
            {/* Make all changes to the UI here */}
            <Layout loggedIn={user}/>
        </div>)
}
