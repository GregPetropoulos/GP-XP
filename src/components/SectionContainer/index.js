import React from "react";

function SectionContainer (props) {
    return <div className='section-container' style={props.style}>{props.children}</div>

}

export default SectionContainer;