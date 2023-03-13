import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import Centered from "./Centered";

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
  max-width: auto;
  margin: 0px auto 20px;
  text-align: center;
`;

const StyledButton = styled.a`
  color: #e7edf2;
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
    color: #e7edf2;
  }
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

function RoiInput(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const inputs1 = inputNames1.map((name, index) => (
    <div key={index}>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput
        type={"number"}
        required={true}
        value={props.value}
        onChange={props.onChange}
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
        onChange={props.onChange}
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
        onChange={props.onChange}
      />
    </div>
  ));

  const RoiFieldRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 290px 0px;
  min-width: 100vw;
`;

  return (
    <Wrapper>
      <RoiFieldRows>
        <form>{inputs1}</form>
        <form>{inputs2}</form>
        <form>{inputs3}</form>
      </RoiFieldRows>
      
      <div>
        <Centered>
          <StyledButton onClick={handleOpenModal}>Click Me</StyledButton>
          <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
            <p>1st Year ROI: $275,000</p>
            <p>2nd Year ROI: $582,000</p>
            <p>3rd Year ROI: $1,197,000</p>
            <StyledButton onClick={handleCloseModal}>Close</StyledButton>
          </Modal>
        </Centered>
      </div>
    </Wrapper>
  );
}

export default RoiInput;

