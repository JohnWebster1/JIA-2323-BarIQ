import Head from 'next/head'
import LeftSection from "../components/login-signup/LeftSection";
import RightSection from "../components/login-signup/RightSection";
import {useState} from "react";
import {initFirebase} from "../util/firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/router";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onClick = () => {
        if (email.length === 0) {
            alert("Please enter in an email.")
        } else if (password.length === 0) {
            alert("Please enter in a password")
        } else {
            initFirebase();
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    router.push("/")
                    // ...
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage.includes("invalid-email")) {
                        alert("Invalid email: " + email);
                    } else if (errorMessage.includes("user-not-found")) {
                        alert("An account with that email was not found.")
                    } else if (errorMessage.includes("wrong-password")) {
                        alert("Invalid password. Please try again.")
                    } else {
                        alert("Some error occurred. Please try again.")
                    }
                });
        }
    };

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
                onClick={onClick}
                email={email}
                password={password}
                setEmail={handleEmailChange}
                setPassword={handlePasswordChange}
            />
        </div>
    )
}
