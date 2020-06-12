import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function FavoriteNumbers({numbers}) {
  const [favNumbers, setFavNumbers] = useState(numbers);

  return <>
    <button onClick={() => {setFavNumbers([8, 11, 24, 144])}}>add middle</button>
    <ul>
    {
      favNumbers.map((n) =>
        <li key={n}>
          <Number number={n}></Number>
        </li>
      )
    }
    </ul>
    </>
}

function Number({number}) {
  const hidden = useHidden();
  const [n, setN] = useState(number);
  useKey('a', () => setN((n) => n + 1));
  useKey('b', () => setN((n) => n + 3));

  return <div className={hidden ? 'hidden' : ''}>
    <button onClick={() => {setN(n + 1)}}>increment</button>
    <span>{n}</span>
  </div>
}

function useKey(key, cb) {
  useEffect(() => {
    const listener = e => {if (e.key === key) cb()}
    document.addEventListener('keypress', listener);
    return () => {
      document.removeEventListener('keypress', listener);
    };
  }, []);
}

function useHidden() {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(false);
    console.log(123);
  }, [setHidden]);
  return hidden;
}

ReactDOM.render(
  <FavoriteNumbers numbers={[8,24,144]}></FavoriteNumbers>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
