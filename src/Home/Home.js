import React, { Component } from 'react';
import './css/Home.css';
import 'element-theme-default';
import HeadMenu from '../common/component/HeadMenu.js';;

export default
class Home extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="Home">
        <HeadMenu />
        <p className="Home-intro">
          Hello react!!!
        </p>
          
      </div>
    );
  }
};
