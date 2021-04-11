import React, { useState } from "react";



const Digitaltime = () => {

    let currtime = new Date().toLocaleTimeString();

    const [ctime, setCurrTime] = useState(currtime);

    const UpdateTime = () => {
        //let newcurTime = new Date().toLocaleTimeString(); // both working
        currtime = new Date().toLocaleTimeString();
        setCurrTime (currtime) ;
    };
    return(
        <>
            <h1>{ctime}</h1>
            <button onClick={UpdateTime}> Click Me </button>
        </>
    );
}

export default Digitaltime;