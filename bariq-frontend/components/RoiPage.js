import React from 'react'

import styled from "styled-components";

const Heading = styled.h1`
  background:  #E7EDF2;
  font-size: 20px;
  height: 60px;
  font-weight: bold;
  color: #1b93d2;
  padding-top: 20px;
  padding-bottom: 50px;
  margin: 0;
`;

const LinkRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 0 50px;
  width: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #d9dce3;
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px;
  max-width: 250px;
`;

const Link = styled.a`
  font-size: 1.0rem;
  cursor: pointer;
  text-align: left;
  display: inline-block;
  text-decoration: none;
  color: black;
  &:hover {
    color: #1b93d2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const OrderedList = styled.ol`
  margin: 20px 0;
`;

function RoiPage() {
  return (
    <Wrapper>
        <Heading>Understanding your ROI</Heading>
        <p>Return on investment (ROI) can be used to determine<br/>the profitability associated with capital expenditures for your warehouse.</p>
        <br/>
        <p>Bar IQ offers this tool to help you explore the<br/>business value a partnership could bring to your warehouse.</p><br/>
        <Heading>Our ROI Indicators</Heading>
        <p>Our ROI calculator takes into account 20+ unique factors to determine<br/>your estimated ROI when becoming a BarIQ customer!  It will<br/>consider your current expenses, profits, and warehouse size.</p>
        <LinkRows>     
            <Column>
                <Link>• Percentage of product "mispicks"</Link>
                <Link>• Warehouse square footage</Link>
                <Link>• Volume of product fulfillment by item</Link>
                <Link>• Number of forklifts</Link>
            </Column>
            <Column>
                <Link>• Number of warehouse workers</Link>
                <Link>• Average compensation of warehouse workers</Link>
                <Link>• Hours of production</Link>
                <Link>• Percentage of order inaccuracies</Link>
            </Column>
            <Column>
                <Link>• Total truck drivers</Link>
                <Link>• Average compensation of truck drivers</Link>
                <Link>• Average cost of gas in your region </Link>
                <Link>• Number of delivery vehicles</Link>
            </Column>
            <Column>
                <Link>• Number of current label printers</Link>
                <Link>• Number of current labels purchased annually</Link>
                <Link>• Number of Barcode handheld scanners</Link>
                <Link>• Average sales price of craft beer product</Link>
            </Column>
        </LinkRows>
        <Heading>Easy To Use</Heading>
        <p>Try it in 4 easy steps:</p>
        <OrderedList>
            <li>1. Enter budget</li>
            <li>2. Enter warehouse size</li>
            <li>3. Enter RFID expenses</li>
        </OrderedList>
    </Wrapper>
  )
}

export default RoiPage