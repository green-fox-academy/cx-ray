import React, {useState, useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function changeNumber(Component, change) {
  return ({number, forwardRef}) => <Component ref={forwardRef} number={change(number)}></Component>
}

function Number({number}) {
  return <div>{number}</div>
}

const NumberPlusOne = changeNumber(Number, n => n + 1);

const DoublePlusOne = changeNumber(NumberPlusOne, n => n * 2);


function DisplayAnimals() {
  const animals = useSelector(state => state.animals);

  return <ul>
    {
      animals.map(a => <li key={a.key}>{a.name}</li>);
    }
  </ul>
}

function DisplayFruits() {
  const fruits = useSelector(state => state.fruits);

  return <ul>
    {
      fruits.map(f => <li key={f.key}>{f.name}</li>);
    }
  </ul>
}

function Display({selector}) {
  const items = useSelector(selector);
  return <ul>
    {
      items.map(i => <li key={i.key}>{i.name}</li>);
    }
  </ul>
}

function displayWith(Component, selector) {
  return () => <Component selector={selector}></Component>
}

const DisplayFruits = displayWith(Display, (store) => store.fruits)
const DisplayAnimals = displayWith(Display, (store) => store.animals)


ReactDOM.render(
  <DoublePlusOne forwardRef={asdf} number={4}></DoublePlusOne>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
