import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SecondComponent = (props) => {
  return(
    <div>{props.greetings}</div>
    );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcome: false
    }
  }

  onClick = (event) => {
    this.setState({
      welcome: !this.state.welcome
    })
  }

  render() {
    const { welcome } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className={welcome ? "App-logo" : "App-logo-reverse"} alt="logo" />
          <h2>Welcome to React {welcome ? "(right)" : "(left)"}</h2>
          <button onClick={this.onClick}>Welcome</button>
        </div>
        <SecondComponent greetings="Hello, World!" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;