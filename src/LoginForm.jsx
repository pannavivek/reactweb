import React, { useState } from 'react';


const LoginForm = () =>{

    
    /*
     Dono code use kar sakte hai
    const [name, setName] = useState('');
    const [lname, setLName] = useState('');

    const [fName, setFName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmits = (event) => {
        event.preventDefault();
        setFName (name);
        setLastName (lname);
    };
    const inputEvent = (event) => {
            setName (event.target.value);
    };

    const inputEventtwo = (event) => {
        setLName (event.target.value);
    };*/
    
    const [name, setName] = useState( {
        name : '',
        lname : '',
        email : '',
        phone : '',
    });

   
    const inputEvent = (event) => {

       // const value = event.target.value; isko object dis strutureing se single line me kar rhe h
        //const name = event.target.name;

        const {value, name} = event.target;

        setName ((prevalue) => {

            return{
                ...prevalue,
                [name] : value,
            };
            
            // if ( name === 'fName') {
            //    return{
            //     names: value,
            //     lnames : prevalue.lnames,
            //     email : prevalue.email,  
            //     phone : prevalue.phone,
            //    } 
            // }  
            // else if ( name === 'lName') {
            //     return{
            //      names: prevalue.names,
            //      lnames : value,
            //      email : prevalue.email,
            //      phone : prevalue.phone,
            //     } 
            //  } 
            //  else if ( name === 'email') {
            //     return{
            //      names: prevalue.names,
            //      lnames : prevalue.lnames,
            //      email : value,
            //      phone : prevalue.phone,
            //     } 
            //  }   
            //  else if ( name === 'phone') {
            //     return{
            //      names: prevalue.names,
            //      lnames : prevalue.lnames,
            //      email : prevalue.email,
            //      phone : value,
            //     } 
            //  }        
        });
    };
 const onSubmits = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <form onSubmit={onSubmits}>
                <h1>Login {name.name} {name.lname}</h1>
                <p>{name.email} {name.phone}</p>
                <input type="text" placeholder="Enter Name" name="name" onChange={inputEvent} value={name.name}></input><br />
                <input type="text" placeholder="Enter Last Name" name="lname" onChange={inputEvent} value={name.lname}></input><br/>
                <input type="text" placeholder="Enter email" name="email" onChange={inputEvent} value={name.email}></input><br />
                <input type="text" placeholder="Enter phone" name="phone" onChange={inputEvent} value={name.phone}></input><br/>
                <button type="submit"> Submit </button>
            </form>
        </>

    );


}

export default LoginForm;