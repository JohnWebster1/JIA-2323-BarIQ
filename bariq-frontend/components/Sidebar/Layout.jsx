import React from 'react'
import Sidebar from './Sidebar'
import Home  from "../Home.js"

const Layout = (props) => {
    return (
        <div className='h-screen flex flex-row justify-start'>
            <Sidebar />
            <div className='bg-secondary flex-1 p-4 text-black'>
                {props.loggedIn ? <h1>Welcome {props.loggedIn.displayName}! </h1>: <></>}
                <Home/>
                
            </div>
        </div>
    )
}

export default Layout