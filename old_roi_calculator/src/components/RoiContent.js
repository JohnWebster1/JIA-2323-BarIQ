import React from 'react'
import ContentBullet from "./contentBullet"

export default function RoiContent() {
    const RoiContentStyles = {
        display: 'block',
        maxWidth: "600px",
        color: '#0d1a53',
        margin: "20px 20px",
        padding: "10px 10px",
        fontFamily: 'sans-serif'
    }
    const paragraphStyles = {
        color: "#6F7CB2"
    }

    const bullets = [
        {
            title: "Beer Mispicks",
            description: "The amount of beer pallets that is being distributed incorrectly by warehouses."
        },
        {
            title: "Warehouse Workers",
            description: "RFID Automation serves to help save costs on warehouse workers."
        },
        {
            title: "Forklifts",
            description: "Gives a description of the number of forklifts needed for the implementation and efficient use of RFID technology."
        },
        {
            title: "Warehouse Size",
            description: "Describes to us how many workers and forklifts need to be allocated in warehouses."
        }
    ]

    const bulletGroupStyles = {
        display: "flex",
        padding: "20px 0px"
    }

    return (
        <div style={RoiContentStyles}>
            <h2>Our Custom ROI Calculator</h2>
            <p style={paragraphStyles}>Our ROI calculator uses a variety of factors to determine your estimated ROI by becoming a BarIQ customer!</p>
            <p style={paragraphStyles}>Our ROI calculator takes into account 30 different ROI indicators specific to the beer warehousing industry. These indicators directly show you what the implementation of RFID technology can do for your beer warehouse. Additionally we offer a 3 year outlook that will describe the continuous ROI as you continue using our RFID technologies.</p>
            <nav style={bulletGroupStyles}>
                <ContentBullet title={bullets[0].title} description={bullets[0].description}/>
                <ContentBullet title={bullets[1].title} description={bullets[1].description}/>
            </nav>
            <nav style={bulletGroupStyles}>
                <ContentBullet title={bullets[2].title} description={bullets[2].description}/>
                <ContentBullet title={bullets[3].title} description={bullets[3].description}/>
            </nav>
        </div>
    )
}