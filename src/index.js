import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Incr from './Incr';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Menu from './Menu';


const fname ='vivek';
const age = 'ddd';



const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

//for inline css 
const para = {
  color:"#777",
  fontSize:"18px"
}




ReactDom.render(<React.Fragment>
<BrowserRouter>
  <Nav />
</BrowserRouter>

<h1>hello world</h1> 
<h2>{` my Name is ${fname} my age ${age}`}</h2>
<p className="p"> current Date={currentDate}</p>
<p>current Time= {currentTime}</p>
<p>ccscssfssxzsefa</p> 

<p style={ para }>Material Design is the standard for designing and creating websites and apps. </p>


<App />

<Incr />



</React.Fragment>,
   document.getElementById('root'));

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();*/
