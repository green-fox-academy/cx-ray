import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let animal = 'kutya';
let sound = 'vau';
let numbers = [1,2,3,4];

ReactDOM.render(
  /*<div className="kutya">
    { numbers.map(n => <span key={n}>{n}</span>) },
    <div>type: {animal}</div>
    <div>sound: {sound}</div>
  </div>,*/

  React.createElement('div', {className: 'kutya'},
    numbers.map((n, i) => React.createElement('span', {key: i}, n)),
    React.createElement('div', {}, "type: ", animal),
    React.createElement('div', {}, "sound: ", sound),
  ),
  document.querySelector('.jeej')
);

console.log(<>
  { numbers.map((n, i) => <span key={i}>{n}</span>) }
  <div>type: {animal}</div>
  <div>sound: {sound}</div>
</>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
