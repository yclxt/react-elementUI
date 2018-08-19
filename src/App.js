import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button} from 'element-react';
import 'element-theme-default';

class App extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
  onClick(){
      alert('click');
  }
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
          <Button type="primary" onClick={this.onClick}>Hello</Button>
      </div>
    );
  }
}

export default App;
