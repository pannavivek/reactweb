import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
//import Error from './Error';
import ServicesDetalis from './ServicesDetalis';


const Nav = () => {

    const Name = () =>{
        return (
            <>
                <h1> Name Page </h1>
            </>
        );
    }
    return (
        <>
            <Switch>
                <Route exact path='/' component={Nav} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/servicesDetalis:name' component={ServicesDetalis} />
                <Route exact path='/contact' component={Contact} />
                <Route  path='/contact/name' component={Name} />
               { /* <Route component={Error} /> */}
                {/*<Redirect component="/"></Redirect> */}
            </Switch>

           { /*<About />
            <Services />
            <Contact /> */}
        </>
    );

}
export default Nav;