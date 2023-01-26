import Head from 'next/head'
import LeftSection from "../components/login-signup/LeftSection";
import RightSection from "../components/login-signup/RightSection";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bar IQ | Log In</title>
                <meta name="description" content="Bar IQ is a warehouse management software for beer warehouses."/>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <LeftSection/>
            <RightSection
                href={"/signup"}
                topText={"Don't have an account?"}
                topButtonText={"Sign Up"}
                headerText={"Welcome back to BarIQ!"}
                headerSubText={"Fill in your credentials to log in."}
                useName={false}
                buttonText={"Log In"}
            />
        </div>
    )
}
