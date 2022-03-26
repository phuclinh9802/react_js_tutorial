import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Embedding Expressions in JSX

// const name = "Phillip Nguyen";
// const element = <h1>Hello, {name}</h1>;

// JavaScript expression
/*
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Phillip',
  lastName: 'Nguyen'
}
*/

// React CreateElement which equals to html tag
// better because of the bug-free code + creates an object

/*
const createEl = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello,  world!'
)
*/

/*
  We can also write the code like this, but this is not simplified: 
  const createEl = React.createElement(
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  )
*/ 

// example time renders every second using setInterval
// this will update the ui every tick when passing the element const into the ReactDom

/*
function tick() {
  const element = (
  <h1>It is {new Date().toLocaleTimeString()}</h1>
);

    ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);
}

setInterval(tick, 1000);
*/
 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
