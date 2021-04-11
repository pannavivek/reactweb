import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GetPokemon = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect (() => {
        async function getData(){
            const respons= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(respons.data.name);
            setMoves(respons.data.moves.length);
        }

        getData();
    })

    return(
        <>

        <h1> chosse value <span style={{color:'red'}}>{num}</span></h1>
       <h2> name <span style={{color:'red'}}>{name}</span></h2>
        <h3> Totel Moves<span style={{color:'red'}}> {moves}</span></h3>

        <select onClick={(event) => {
            setNum (event.target.value);
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </select>
    
        </>
    );
}

export default GetPokemon;