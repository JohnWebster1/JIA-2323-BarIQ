import React from 'react'
import RoiField from "./RoiField";
import {useState} from "react";
import Header from "./Header";
import CalculateButton from "./CalculateButton";
import RoiText from "./RoiText";

export default function RoiForm() {
    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    const handleChange0 = event => {
        setValue0(event.target.value);
    };
    const handleChange1 = event => {
        setValue1(event.target.value);
    };
    const handleChange2 = event => {
        setValue2(event.target.value);
    };
    const handleChange3 = event => {
        setValue3(event.target.value);
    };

    const labels = [
        "Percentage of Beer Mispicks (0 - 1.0)",
        "Number of Warehouse Workers",
        "Number of Interactive Forklifts",
        "Warehouse Size (square feet)"
    ];

    const calculate = () => {
        const mispicks = value0 - 0.5
        if (mispicks < 0.02) {
            mispicks = 0.02
        }
        const forklift_cost = (((value3 / 5000) + 1) - value2) * 40000
        const worker_cost = (value1 * 300000)
        const worker_saved = worker_cost * 0.25
        const mispicks_saved = (value0 - mispicks) * 125000
        
        const roi = 1000000 + worker_saved - forklift_cost + mispicks_saved;
        setRoi(roi);
        setRoiVisible(true);
    }

    const [roi, setRoi] = useState(0);
    const [roiVisible, setRoiVisible] = useState(false);

    const RoiFormStyles = {
        padding: "30px 30px",
        margin: "30px 30px"
    }
  return (
    <div style={RoiFormStyles}>
        <Header style={{margin:"30px", padding:"7px", color:"#0d1a53"}}>ROI Calculator</Header>
        <RoiField label={labels[0]} value={value0} onChange={handleChange0}/>
        <RoiField label={labels[1]} value={value1} onChange={handleChange1}/>
        <RoiField label={labels[2]} value={value2} onChange={handleChange2}/>
        <RoiField label={labels[3]} value={value3} onChange={handleChange3}/>
        <CalculateButton onClick={calculate} style={{background: '#0d1a53', borderRadius : 25}}>Calculate ROI</CalculateButton>
        <RoiText visible={roiVisible}>ROI of Bar IQ technologies: ${roi}</RoiText>
    </div>
  )
}
