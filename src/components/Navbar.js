import React from 'react'

export default function Navbar() {
    const navbarStyles = {
        color: "#091133", 
        display: 'flex',
        margin: '0px 0px',
        padding: '13px 40px',
        font: 'Roboto',
        alignContent: "center"
    }
    const navPagesStyles = {
        display: 'flex',
        margin: "0 20px",
        color: "#091133",
        padding: "10px 10px"
    }
    const buttonStyles = {
        background: "#091133",
        borderRadius: "10px",
        height: '50px',
        width: '100px',
        color: '#FFFFFF'

    }
    return (
        <div>
            <nav className="navbar" style={navbarStyles}>
                <h2>BarIQ</h2>
                <nav style={navbarStyles} >
                    <p style={navbarStyles}>Home</p>
                    <p style={navbarStyles}>Layout</p>
                    <p style={navbarStyles}>ROI</p>
                    <p style={navbarStyles}>Help</p>
                </nav>
                <button style={buttonStyles}>Buy Now</button>
            </nav>
        </div>
    )
}
