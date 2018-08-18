import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'element-react';
import 'element-theme-default';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello react!!!
        </p>
      <Button type="primary" >Hello</Button>
      </div>
    );
  }
}

export default App;
