import React, {useState, useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const NumberContext = React.createContext(42);
const CharContext = React.createContext("G");

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
  const cn = useContext(NumberContext);
  const cc = useContext(CharContext);
  console.log(cn);
  const hidden = useHidden();
  const [n, setN] = useState(number + cn.number);
  useKey('a', () => setN((n) => n + 1));
  useKey('b', () => setN((n) => n + 3));
  const ref = useRef(null);
  const ref2 = useRef(null);
  console.log(ref);

  useEffect(() => {
    ref.current = {n};
    setTimeout(() => console.log(ref.current.n, ref2.current.innerHTML), 1000);
  }, [n]);

  return <div className={hidden ? 'hidden' : ''}>
    <button onClick={() => {setN(n + 1)}} ref={ref2}>incrementi {cc}</button>
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

function MyProvider({children}) {
  const [nc, setNc] = useState(0);

  return <>
    <button onClick={() => setNc(1 + nc)}>increment nc</button>
    <NumberContext.Provider value={{number: nc}}>
      <CharContext.Provider value="A">
        {nc}
        {children}
      </CharContext.Provider>
    </NumberContext.Provider>
  </>
}


ReactDOM.render(
  <MyProvider>
    <FavoriteNumbers numbers={[8,24,144]}></FavoriteNumbers>
  </MyProvider>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
