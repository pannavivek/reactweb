import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li exactclassName="active"><NavLink exact activeClassName="active"  to ="/">Home</NavLink></li>
                    <li><NavLink  exact activeClassName="active" to ="/about">About</NavLink></li>
                    <li><NavLink exact activeClassName="active" to ="/services">Services</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    );

}
export default Menu;