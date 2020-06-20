import React, {useState, useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Numbers = ({numbers, render}) => {
  const [ns, setNumbers] = useState(numbers);

  return <>
    <button onClick={() => setNumbers((ns) => [...ns, ns[ns.length - 1] + 1])}>Add</button>
    <button onClick={() => setNumbers((ns) => ns.map(n => n + 100))}>Increment All</button>
    <ul>
    {
      ns.map(n => <li key={n}>{render(n)}</li>)
    }
    </ul>
  </>
}


const NumberPlusOne = ({number}) => {
  return <div>{number + 1}</div>
}

const Number = ({number}) => {
  return <div>{number}</div>
}

ReactDOM.render(
  <Numbers numbers={[1,2,3,4]} render={(n) => <NumberPlusOne number={n} />}></Numbers>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
