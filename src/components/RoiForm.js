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
    const [value4, setValue4] = useState(0);

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
    const handleChange4 = event => {
        setValue4(event.target.value);
    }

    const labels = [
        "Percentage of Beer Mispicks (0 - 100)",
        "Number of Warehouse Workers",
        "Number of Interactive Forklifts",
        "Warehouse Size (square feet)",
        "Yearly Profit"
    ];

    const calculate = () => {
        const intValue0 = parseInt(value0);
        const intValue1 = parseInt(value1);
        const intValue2 = parseInt(value2);
        const intValue3 = parseInt(value3);
        const intValue4 = parseInt(value4);

        const mispicks = intValue0 - 5
        if (mispicks < 2) {
            mispicks = 2
        }
        const forklift_cost = (((intValue3 / 5000) + 1) - intValue2) * 40000
        const worker_cost = (intValue1 * 300000)
        const worker_saved = worker_cost * 0.05
        const mispicks_saved = ((intValue0 - mispicks) / 100) * 125000
        
        const roi1 = intValue4 + worker_saved - forklift_cost + mispicks_saved;
        const roi2 = roi1 + worker_saved + mispicks_saved;
        setRoi1(roi1);
        setRoi2(roi2);
        setRoiVisible(true);
    }

    const [roi1, setRoi1] = useState(0);
    const [roi2, setRoi2] = useState(0);
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
        <RoiField label={labels[4]} value={value4} onChange={handleChange4}/>
        <CalculateButton onClick={calculate} style={{background: '#0d1a53', borderRadius : 25}}>Calculate ROI</CalculateButton>
        <RoiText visible={roiVisible}>Profit after Bar IQ Technologies Year 1: ${roi1}</RoiText>
        <RoiText visible={roiVisible}>Profit after Bar IQ Technologies Year 2: ${roi2}</RoiText>
    </div>
  )
}
