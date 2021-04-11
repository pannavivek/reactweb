import React, { useState } from "react";


const Digiclock = () => {

    let time = new Date().toLocaleTimeString();

    const [crtime, setTime] = useState(time);

    //setTime(crtime);

    //const [crtime, setCurrTime] = useState(currtime);

    const UpdateTime = () => {
        //let newcurTime = new Date().toLocaleTimeString(); // both working
        time = new Date().toLocaleTimeString();
        setTime (time) ;
    };
        setInterval (UpdateTime,1000)
    return (
        <>
            <div id="countdown">
                <div id='tiles'>{time}</div>
            </div>
        </>
    );

}

export default Digiclock;