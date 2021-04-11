import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';


const Incr = () => {

    const [num, setNum] = useState(0);

    const incrNum = () =>{
        setNum(num + 1);
    };
    const decrNum = () =>{
        if (num > 0) {
            setNum(num - 1);
        }else{
            alert('limit reached');
            setNum(0);
        }
    };
    return (
        <>
         <div className="main_div">
             <div className="center_div">
                 <br/>
                     <h1> {num} </h1>
                 <br/>
                 <div className="btn_div">
                    <button className="btn btn-success "  onClick={incrNum}> Add <AddIcon /></button>
                    <button className="btn btn-danger "  onClick={decrNum}> Min <MinimizeIcon /> </button>
                 </div>
             </div>
         </div>
 
        </>
     );
 };
  export default Incr;