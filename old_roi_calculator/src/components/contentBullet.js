import React from 'react'

function contentBullet(props) {
    const bulletStyles = {
        maxWidth: "260px",
        padding: "0px 20px"

    }
    return (
        <div style={bulletStyles}>
            <img src="/contentIcon.png" alt={'content icon'}/>
            <h4 style ={{marginTop:'12px', marginBottom:"-5px"}}>{props.title}</h4>
            <p style = {{fontSize:"13px", color:"#697386"}}>{props.description}</p>
        </div>
    )
}

export default contentBullet;