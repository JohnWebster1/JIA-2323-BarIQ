import Head from 'next/head'
import LeftSection from "../components/login-signup/LeftSection";
import RightSection from "../components/login-signup/RightSection";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bar IQ | Sign Up</title>
                <meta name="description" content="Bar IQ is a warehouse management software for beer warehouses."/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <LeftSection/>
            <RightSection
                href={"/login"}
                topText={"Already have an account?"}
                topButtonText={"Log In"}
                headerText={"Welcome to BarIQ!"}
                headerSubText={"Get started by creating an account."}
                useName={true}
                buttonText={"Sign Up"}
            />
        </div>
    )
}
