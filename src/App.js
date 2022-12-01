
// import {useState} from "react";

import Navbar from "./components/Navbar";
import "./App.css"
import RoiForm from "./components/RoiForm";
import RoiContent from "./components/RoiContent"

function App(props) {
    const RoiWindowStyles = {
        display:"flex"
    }
    return (
        <div className="app-window">
            <Navbar />
            <nav style={RoiWindowStyles}>
                <RoiForm/>
                <RoiContent/>
            </nav>
            
        </div>
    );
}

export default App;