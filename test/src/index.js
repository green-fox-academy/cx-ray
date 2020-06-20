import React, {useState, useEffect, useRef, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Modal = ({children}) => {
  return ReactDOM.createPortal(<div className="modal-bg">
    <div className="modal">
      {children}
    </div>
  </div>, document.querySelector('.modal-wrap'))
}

const Main = () => {
  const [isOpen, setOpen] = useState(false);

  return <main>
    Main content
    <button onClick={() => setOpen(true)}>Booom</button>
    { isOpen ? <Modal>Hello</Modal> : ''}
  </main>
}

ReactDOM.render(
  <div className="app">
    <Main/>
    <aside>
      Sidebar
    </aside>
  </div>,
  document.querySelector('.root')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
// console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
