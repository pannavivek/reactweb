import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Para from './Para';
import exportpro, {expage, mypro} from './Expopage';
import sum, {sub, multi, div} from './Calu';
import Card from './Cards';
import Sous from './Sous';
import Netfilx from './Netfilx';
import Amazon from './Amazon';
import Chooks from './Chooks';
import Digitaltime from './Digitaltime';
import Digiclock from './Digiclock';
import Forms from './Forms';
import LoginForm from './LoginForm';
import Clock from 'react-digital-clock';
import ToDoList from './ToDoList';
import Otherhooks from './Otherhooks';
import GetPokemon from './GetPokemon';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/ 

/*function ndata (val){
  return (
    <Card 
      imgsrc= {val.imgsrc}
      ctitle= {val.ctitle}
      ctext= {val.ctext}
      links= {val.links}
    />
  );
}*/

function App() {
  let currDate = new Date();
currDate = currDate.getHours();

let manner ='';
const colorstyle = {}

if(currDate >=1 && currDate <12) {
  manner = 'sunrise';
  colorstyle.color = 'red';

}else if (currDate >=12 && currDate <18){
  manner = 'after';
  colorstyle.color = 'orange';
} else{
  manner = 'night';
  colorstyle.color = '#333';
}


const favr = 'az';

    return (
      <>
<Clock />
<ToDoList />
      <Forms />
      <LoginForm />
      <Hello />
      
       <Para />
       <h1>hello use
         <span style= { colorstyle}> {manner}</span></h1>
       <ul>
         <li>{exportpro}</li>
         <li>{expage}</li>
         <li>{mypro()}</li>
         <li>sum {sum (20,10)} </li>
         <li>sub {sub (20,10)}</li>
         <li>multi {multi (20,10)}</li>
         <li>div {div (202,3)}</li>
       </ul>
       {Sous.map((val) => {     // fat arrow function use
          return (
            <Card 
             key = {val.id}
              imgsrc= {val.imgsrc}
              ctitle= {val.ctitle}
              ctext= {val.ctext}
              links= {val.links}
            />
          );
        }
       )
       }
       
        {favr === 'net' ? <Netfilx /> : <Amazon />}
       <Chooks />
       <Digitaltime />
       <Otherhooks/>
       <GetPokemon/>
      </>
    );
}

export default App;
