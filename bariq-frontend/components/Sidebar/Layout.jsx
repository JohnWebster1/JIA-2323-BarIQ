import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-black">
        Home Page
        {props.loggedIn ? (
          <h1>Welcome {props.loggedIn.displayName} </h1>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Layout;
