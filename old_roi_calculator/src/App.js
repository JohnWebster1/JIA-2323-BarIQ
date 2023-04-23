
// import {useState} from "react";

import Navbar from "./components/Navbar";
import "./App.css"
import RoiForm from "./components/RoiForm";
import RoiContent from "./components/RoiContent"

function App() {
    const RoiWindowStyles = {
        display:"flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        font: "Roboto"
    }
    return (
        <div className="app-window" style={{width:'100%'}}>
            <Navbar />
            <nav style={RoiWindowStyles}>
                <RoiForm/>
                <RoiContent/>
            </nav>
            
        </div>
    );
}

export default App;