import React from "react";
//import Sidebar from "./Sidebar";

import Head from 'next/head'

import {useAuthState} from "react-firebase-hooks/auth";
import {initFirebase} from "../../util/firebaseApp";
import {getAuth} from "firebase/auth";
import {useRouter} from "next/router";

import Navbar from "../Navbar";
import Sidebar from './Sidebar';

const Layout = (props) => {
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

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-black">
        <Navbar loggedIn={user} logout={logout}/>
        <div className="Navbar flex flex-col">
        Home Page
        {props.loggedIn ? (
          <h1>Welcome {props.loggedIn.displayName} </h1>
        ) : (
          <></>
        )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
