import React, { useState } from 'react';


const Forms = () =>{

    
    const [name, setName] = useState('');
    const [fName, setFName] = useState('');

    const onSubmits = (event) => {
        event.preventDefault();
        setFName (name);
    };
    const inputEvent = (event) => {
            setName (event.target.value);
    };
    
    return(
        <>
            <form onSubmit={onSubmits}>
                <h1>hello {fName}</h1>
                <input type="text" onChange={inputEvent} value={name}></input>
                <button type="submit"> Submit </button>
            </form>
        </>

    );


}

export default Forms;