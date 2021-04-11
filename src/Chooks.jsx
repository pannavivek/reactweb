import React, { useState } from 'react';

const Chooks = () => {
   
    const state = useState();
    //console.log(state);

    const [count, setCount] = useState(0);
    //let count = 1;
        const InClick = () => {
            //console.log( "click " + count++);
            setCount (count + 1)
        }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={InClick}> Click Me </button>
        </>
    );
}

export default Chooks;