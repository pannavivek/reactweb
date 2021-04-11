import React, { useEffect, useState } from 'react';


const Otherhooks = () => {

    const [num, setNum] = useState(0);

    useEffect (() => {
        document.title =  `add Title number ${num} Click`;
    })

    return(
        <button onClick={() => {
            setNum (num + 1);
        }}> Click Us {num} </button>
    );
}

export default Otherhooks;