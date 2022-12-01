import React from 'react'

export default function Navbar() {
    const navbarStyles = {
        color: "#091133", 
        display: 'flex',
        margin: '0px 0px',
        padding: '13px 40px',
        fontFamily: 'Roboto',
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
        color: '#FFFFFF',
        fontFamily: "Roboto"

    }
    return (
        <div>
            <nav className="navbar" style={navbarStyles}>
                <h2 style={navbarStyles}>Bar IQ</h2>
                <nav style={navbarStyles} >
                    <p style={navPagesStyles}>Home</p>
                    <p style={navPagesStyles}>Layout</p>
                    <p style={navPagesStyles}>ROI</p>
                    <p style={navPagesStyles}>Help</p>
                </nav>
                <button style={buttonStyles}>Buy Now</button>
            </nav>
        </div>
    )
}
