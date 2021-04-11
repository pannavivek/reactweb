import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const ToDoList = () => {
 
    const [inputList, setInputList] = useState (" ");

    const [items, setItems] = useState ([]);

    const itemEvent = (event) => {
       
        setInputList (event.target.value);

    };

    const listOfItems = () => {

        setItems((olditems) => {
            return [...olditems, inputList]
        });

        setInputList ("");
    };

    const deleteItems = (id) => {
        setItems((olditems) =>{
            return olditems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    } ;

    return (
       <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                    <h1> To DO list</h1>
                <br/>
                <input type="text"   placeholder="Add Item" value={inputList} onChange={itemEvent} />
                <button className="newBtn" onClick={listOfItems}> + </button>
                
                <ol>
                    
                    { items.map ((itemval, index) => {
                        return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>;
                    })}
                </ol>
            </div>
        </div>

       </>
    );
};
 export default ToDoList;