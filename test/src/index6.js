import React, {useState, useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Numbers = ({numbers}) => {
  const [ns, setNumbers] = useState(numbers);

  return <>
    <button onClick={() => setNumbers((ns) => [...ns, ns[ns.length - 1] + 1])}>Add</button>
    <button onClick={() => setNumbers((ns) => ns.map(n => n + 100))}>Increment All</button>
    <ul>
    {
      ns.map(n => <li key={n}><NumberPlusOne number={n}></NumberPlusOne></li>)
    }
    </ul>
  </>
}

let a = 0;

const NumberPlusOne = React.memo(
  ({number}) => {
    a++;
  console.log('RENDER TORTENT', number);
  return <div>{number + 1 + a}</div>
}
)

ReactDOM.render(
  <Numbers numbers={[1,2,3,4]}></Numbers>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
