import RoiField from "./components/RoiField";
import {useState} from "react";
import Header from "./components/Header";
import CalculateButton from "./components/CalculateButton";
import RoiText from "./components/RoiText";

function App(props) {
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
        "Profits (dollars)",
        "Expenses (dollars)",
        "Warehouse Size (square feet)",
        "RFID Investment (dollars)"
    ];

    const calculate = () => {
        const first = Math.abs(value0 - value1);
        const roi = first * (value3 / 10000);
        setRoi(roi);
        setRoiVisible(true);
    }

    const [roi, setRoi] = useState(0);
    const [roiVisible, setRoiVisible] = useState(false);

    return (
        <>
            <Header>ROI Calculator</Header>
            <RoiField label={labels[0]} value={value0} onChange={handleChange0}/>
            <RoiField label={labels[1]} value={value1} onChange={handleChange1}/>
            <RoiField label={labels[2]} value={value2} onChange={handleChange2}/>
            <RoiField label={labels[3]} value={value3} onChange={handleChange3}/>
            <CalculateButton onClick={calculate}>Calculate ROI</CalculateButton>
            <RoiText visible={roiVisible}>Your ROI per year is: ${roi}</RoiText>
        </>
    );
}

export default App;