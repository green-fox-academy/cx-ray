import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Animal(props) {
  const [n, setN] = React.useState(0);

  return <>
    <button onClick={() => setN(n + 1)}>increment</button>
    <div>{n}</div>
    <dl>
      <dt>type:</dt>
      <dd>{props.type}</dd>
      <dt>sound:</dt>
      <dd>{props.sound}</dd>
    </dl>
  </>;
}

class Animal2 extends React.Component {
  constructor() {
    super();
    this.state = {n: 0}
  }

  clickHandle() {
    this.setState({n: this.state.n + 1});
  }

  render() {
    return <>
      <button onClick={() => this.clickHandle()}>increment</button>
      <div>{this.state.n}</div>
      <dl>
        <dt>type:</dt>
        <dd>{this.props.type}</dd>
        <dt>sound:</dt>
        <dd>{this.props.sound}</dd>
      </dl>
    </>;
  }
}

ReactDOM.render(
  <Animal type="dog" sound="woof"></Animal>,
  document.querySelector('.jeej')
);

// React.createElement(Animal, {type: "dog", sound: "woof"});
console.log(<Animal type="dog" sound="woof"></Animal>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
