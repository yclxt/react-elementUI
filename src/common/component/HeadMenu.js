import React, { Component } from 'react';
import {Button} from 'element-react';
import 'element-theme-default';
import '../css/HeadMenu.css';

import logo from '../images/logo.svg';

export default
class HeadMenu extends Component{

 constructor(props){
    super(props);

 }

 componentWillMount(){
    debugger
   this.setState({
      loginStatus:false,
      user:{
        username: '游客'
      }
    });
   	//做登录判断如果登录了，
   	// if(this.state.loginStatus){
   	// 	//设置user
   	// 	console.log("1");
   	// }
 }

  onClick(){
    window.location.href = "/login";
  }

 noLoginRender(){

  return (
      <div>
        <header className="App-header">
          <div className="ImgDiv">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="ButtonDiv">
            <span>欢迎您，{this.state.user.username}！请先  </span>
            <Button type="primary" onClick={this.onClick}>登录</Button>  
          </div>
        </header>
      </div>
    );
 }

 render() {
    var self = this;
    if(self.state.loginStatus == false){
        return self.noLoginRender();
    }
    
  }

};


