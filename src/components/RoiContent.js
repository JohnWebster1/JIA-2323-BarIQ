import React from 'react'
import contentBullet from "./contentBullet"

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

    }

    const bullets = [
      {
        title: "Warehouse Size",
        description: "We consider your warehouse size to see exactly how efficient our proposed solution will be for your warehouse."
      },
      {
        title: "RFID Purchase",
        description: "The RFID purchase is the bulk of your investment. Its integration is what will improve warehouse efficiency."
      },
      {
        title: "Profits",
        description: "Your current company profits are an important thing for us to consider. If your company has profits, we can look to reinvest them to purchase our services."
      },
      {
        title: "Expenses",
        description: "Providing us with your current expenses allows us to see if your investment will lower your expenses after RFID integration."
      }
    ]

  return (
    <div style={RoiContentStyles}>
        <h2>Our Custom ROI Calulator</h2>
        <p style={paragraphStyles}>Our ROI calculator uses a variety of factors to determine your estimated ROI by becoming a BarIQ customer!  It will consider your current expenses, profits, and warehouse size.</p>
        <p style={paragraphStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <nav>
          <contentBullet title={bullets[0].title} description={bullets[0].description}/>
          <contentBullet title={bullets[1].title} description={bullets[1].description}/>
        </nav>
        <nav>
          <contentBullet title={bullets[2].title} description={bullets[2].description}/>
          <contentBullet title={bullets[3].title} description={bullets[3].description}/>
        </nav>
        
    </div>
  )
}
