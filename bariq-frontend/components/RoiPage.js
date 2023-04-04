import React from 'react'

import styled from "styled-components";

const Heading = styled.h1`
  background:  #E7EDF2;
  font-size: 23px;
  height: 60px;
  font-weight: bold;
  color: #305f82;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
`;

const LinkRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 0 10px;
  width: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #c9d8e2;
  padding: 10px;
  border: 2px solid;
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
    font-size: 1.1rem;
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
  margin-bottom: 20px;
  max-width: 1000px;
  align-content: start;
  text-align: start;
  list-style-type: upper-roman;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`

function RoiPage() {
  return (
    <Wrapper>
        <Heading>Understanding your ROI</Heading>
        <p>Return on investment (ROI) can be used to determine the<br/> profitability associated with capital expenditures for your warehouse.</p><br/>
        <p>Bar IQ offers this tool to help you explore the business<br/> value a partnership could bring to your warehouse.</p><br/>
        <Heading>Our ROI Indicators</Heading>
        <p>Our ROI calculator takes into account 20+ unique factors to <br/>determine your estimated ROI when becoming a Bar IQ customer!<br/>It will consider your current expenses, profits, and warehouse size. </p>
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
        <Heading>Why ROI Calculation?</Heading>
        <OrderedList>
            <ListItem>Helps with investment decision-making: Beer warehouses can use ROI calculations to evaluate the profitability of investing in new equipment, technology, or facilities. By assessing the expected ROI of different investment options, warehouses can prioritize those with the highest potential return.</ListItem>
            <ListItem>Enables better inventory management: Beer warehouses can use ROI calculations to evaluate the profitability of carrying certain beer brands, types, or volumes. By analyzing the ROI of different inventory options, warehouses can optimize their inventory management and ensure they are carrying the most profitable beers.</ListItem>
            <ListItem>Facilitates cost management: Beer warehouses can use ROI calculations to assess the financial impact of various operational costs, such as transportation, storage, or labor costs. By tracking the ROI of different cost-saving initiatives, warehouses can prioritize those that are most effective and efficient.</ListItem>
            <ListItem>Helps with performance benchmarking: ROI calculations can help beer warehouses benchmark their performance against industry standards or competitors. By comparing their ROI to that of their competitors, warehouses can identify areas where they may be falling behind and take steps to improve their performance.</ListItem>
            <ListItem>Enables better pricing decisions: Beer warehouses can use ROI calculations to determine the profitability of different pricing strategies. By assessing the ROI of various pricing options, warehouses can optimize their pricing decisions and ensure they are maximizing profitability.</ListItem>

        </OrderedList>
    </Wrapper>
  )
}

export default RoiPage