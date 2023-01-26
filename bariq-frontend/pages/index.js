import Head from 'next/head'
import Navbar from "../components/Navbar";
import Centered from "../components/Centered";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bar IQ | Portal</title>
                <meta name="description" content="Bar IQ is a warehouse management software for beer warehouses."/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <Navbar/>

            <Centered>
                <h1>Home page (todo)</h1>
            </Centered>
        </div>
    )
}
