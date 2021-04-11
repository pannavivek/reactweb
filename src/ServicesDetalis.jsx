import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

// const ServicesDetalis = ({match}) => {   // Code Without  useParams 
//     return (
//         <>
//             <h1> ServicesDetalis { match.params.name} Page </h1>
//         </>
//     );

// }

const ServicesDetalis = () => {
    const {name} = useParams();
    const location = useLocation();
    //const history = useHistory();
    return (
        <>
            <h1> ServicesDetalis { name} Page </h1>
            <p> { location.pathname } </p>
            {/*location.pathname === `/serversdetails/vivek/` ? (<button onClick={ () => alert (`zdfs`) }> Click Me</button>) : null */ }
        </>
    );

}
export default ServicesDetalis;