import React from 'react';
// import "./style.css";

function Hero(props){
    return (<div className='hero text-center' style={{backgroundColor: 'rgb(0, 68, 129)'}}>
        {props.children}
    </div>
    );
}

export default Hero;