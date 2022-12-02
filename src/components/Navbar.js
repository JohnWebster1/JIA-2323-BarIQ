import React from 'react'

export default function Navbar() {
    const navbarStyles = {
        color: "#0d1a53", 
        display: 'flex',
        margin: '0px 0px',
        padding: '0px 0px',
        fontFamily: 'Roboto',
        alignContent: "center",
        justifyContent: "space-evenly",
        width: '100%'
    }
    const navLogoStyles = {
        display: 'flex',
        margin: "20px 20px",
        color: "#0d1a53",
        padding: "10px 10px",
        fontFamily: "sans-serif",
        alignItems: "center"

        
    }
    const navPagesStyles = {
        display: 'flex',
        margin: "20px 20px",
        color: "#505F98",
        padding: "10px 10px",
        fontFamily: "sans-serif",
        alignItems: "center",
        fontSize: "20px",
    }
    const buttonStyles = {
        background: "#0d1a53",
        borderRadius: "25px",
        height: '50px',
        width: '100px',
        color: '#FFFFFF',
        margin: "50px 20px",
        fontFamily: "sans-serif"

    }
    return (
        <div className='nav-container' style={{width: '100%'}}>
            <nav className="navbar" style={navbarStyles}>
                <h2 style={navLogoStyles}>Bar IQ</h2>
                <nav style={navPagesStyles} >
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
