import Head from 'next/head'
import LeftSection from "../components/login-signup/LeftSection";
import RightSection from "../components/login-signup/RightSection";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import {initFirebase} from "../util/firebaseApp";
import {useRouter} from "next/router";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onClick = () => {
        if (name.length === 0) {
            alert("Please enter in a name")
        } else if (email.length === 0) {
            alert("Please enter in an email.")
        } else if (password.length === 0) {
            alert("Please enter in a password")
        } else {
            initFirebase();
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(r => {
                        // Profile updated
                        router.push("/")
                    }).catch((error) => {
                        router.push("/")
                    })
                    // ...
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage.includes("invalid-email")) {
                        alert("Invalid email: " + email);
                    } else if (errorMessage.includes("email-already-in-use")) {
                        alert("An account with that email already exists.")
                    } else {
                        alert("Some error occurred: " + errorMessage)
                    }
                });
        }
    };

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
                onClick={onClick}
                name={name}
                email={email}
                password={password}
                setName={handleNameChange}
                setEmail={handleEmailChange}
                setPassword={handlePasswordChange}
            />
        </div>
    )
}
