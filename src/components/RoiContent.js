import React from 'react'

export default function RoiContent() {
    const RoiContentStyles = {
        display: 'block',
        maxWidth: "400px",
        color: '#0d1a53',
        margin: "20px 20px",
        padding: "10px 10px",
        fontFamily: 'sans-serif'
    }
    const paragraphStyles = {

    }
  return (
    <div style={RoiContentStyles}>
        <h2>Our Custom ROI Calulator</h2>
        <p style={paragraphStyles}>Our ROI calculator uses a variety of factors to determine your estimated ROI by becoming a BarIQ customer!  It will consider your current expenses, profits, and warehouse size.</p>
        <p style={paragraphStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <p>Icons</p>
    </div>
  )
}
