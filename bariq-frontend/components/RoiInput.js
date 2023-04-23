import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import Centered from "./Centered";
import {saveRoiFields} from "../util/firebaseRoi";

Modal.setAppElement("#__next");

const StyledInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const StyledLabel = styled.label`
  text-align: left;
  display: block;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  margin: 0 auto 50px;
  text-align: center;
`;

const StyledButton = styled.a`
  color: white;
  background: #1a1d4a;
  font-size: 20px;
  padding: 5px 13px;
  border-radius: 200px;
  border-color: #1a1d4a;
  border-style: solid;
  border-width: 1.95px;
  transition: 0.5s;
  text-color: black;

  &:hover {
    background: #2a81e5;
    color: white;
    cursor: pointer;
  }
`;

const CloseButton = styled(StyledButton)`
  padding: 8px 19px;
  font-size: 2rem;
  position: absolute;
  bottom: 40px;
  left: 44vw;
`;

const inputNames1 = [
  "Percentage of product 'mispicks' (0-100)",
  "Number of warehouse workers",
  "Average compensation of warehouse workers ($)",
  "Number of total warehouse workers hours per month",
  "Average hours for product fulfillment ",
  "Percentage of order inaccuraces delivered to customers (0-100)",
  "Total sales for canned/bottled goods ($)",
  "Number of dock doors",
  "Percentage of duplicates delivered to the customer (0-100)",
];
const inputNames2 = [
  "Average sales price of craft beer product",
  "Average sales price of high volume prduct",
  "Warehouse square footage",
  "Number of delivery transportation vehicles",
  "Number of sales representatives",
  "Number of lost sales accounts over last 3 years",
  "Total number of delivery transportation drivers",
  "Percentage rejected deliveries by the customer (0-100)",
  "Average compensation of delivery transportation drivers"
]
const inputNames3 = [
  "Average cost of gas in transportation region",
  "Average sales price of non-alcoholic product",
  "Number of handheld barcode scanners in warehouse",
  "Number of warehouses lost over last 3 years",
  "Number of current label printers in warehouse",
  "Number of current labels purchaed annually",
  "Number of interactive forklifts",
]

const ModalWrapper = styled.div`
  justify-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30vh;
`;

const ModalText = styled.h3`
  padding-bottom: 10px;
  font-size: 2rem;
`

function RoiInput(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log(props.fields);
    // props.fields is an array of 25 integers
    // TODO in the future: use the array to calculate the ROI
    saveRoiFields(props.fields).then(() => {
      setShowModal(true)
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onChange = (event, index) => {
    let fields = props.fields
    fields[index] = parseInt(event.target.value)
    // props.setFields([...fields])
  }

  const inputs1 = inputNames1.map((name, index) => (
    <div key={index}>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput
        type={"number"}
        required={true}
        value={props.value}
        onChange={(event) => onChange(event, index)}
      />
    </div>
  ));
  const inputs2 = inputNames2.map((name, index) => (
    <div key={index}>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput
        type={"number"}
        required={true}
        value={props.value}
        onChange={(event) => onChange(event, index + 9)}
      />
    </div>
  ));
  const inputs3 = inputNames3.map((name, index) => (
    <div key={index}>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput
        type={"number"}
        required={true}
        value={props.value}
        onChange={(event) => onChange(event, index + 18)}
      />
    </div>
  ));

  const RoiFieldRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 290px 0px;
  min-width: 100vw;
`;
  const FieldColumn = styled.div`
  padding: 10px 30px 10px 30px;
  `;

  return (
    <Wrapper>
      <RoiFieldRows>
        <FieldColumn>
          <form>{inputs1}</form>
        </FieldColumn>
        <FieldColumn>
          <form>{inputs2}</form>
        </FieldColumn>
        <FieldColumn>
          <form>{inputs3}</form>
        </FieldColumn>
      </RoiFieldRows>
      
      <div>
        <Centered>
          <StyledButton onClick={handleOpenModal}>Calculate</StyledButton>
          <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
            <ModalWrapper>
              <ModalText>1st Year ROI: $275,000</ModalText>
              <ModalText>2nd Year ROI: $582,000</ModalText>
              <ModalText>3rd Year ROI: $1,197,000</ModalText>
              <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            </ModalWrapper>
          </Modal>
        </Centered>
      </div>
    </Wrapper>
  );
}

export default RoiInput;

