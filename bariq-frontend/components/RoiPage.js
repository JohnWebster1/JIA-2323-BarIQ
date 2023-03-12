import React from 'react'


import styled from "styled-components";

const Heading = styled.h1`
  background:  #E7EDF2;
  font-size: 20px;
  height: 60px;
  width: 95vw;
  font-weight: bold;
  color: #1b93d2;
  padding-top: 20px;
  padding-bottom: 50px;
  margin: 0px 0px 0px 0px;
`;


const LinkRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 250px 50px;
  min-width: 100vw;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  font-size: 1.0rem;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: #black;
  &:hover {
    color: #1b93d2;
  }
`;
function RoiPage() {
  return (
    <div>
        <Heading>Understanding your ROI</Heading>
        <p>Return on investment (ROI) can be used to determine the profitability associated with capital expenditures for your warehouse. </p>
        <p>Bar IQ offers this tool to help you explore the business value a partnership could bring to your warehouse.</p>
        <Heading>Our ROI Indicators</Heading>
        <p>Our ROI calculator takes into account 20+ unique factors to determine your estimated ROI when becoming a BarIQ customer!  It will consider your current expenses, profits, and warehouse size.</p>    
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
        <ol>
            <li>1. Enter budget</li>
            <li>2. Enter warehouse size</li>
            <li>3. Enter RFID expenses</li>
        </ol>
        
    </div>
  )
}

export default RoiPage