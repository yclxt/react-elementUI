import React, { Component } from 'react';
import './Login.css';
import {Button,Form,Input} from 'element-react';
import 'element-theme-default';

class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                password: ''
            }
        };
    }

    onFormChange(k,v){
        console.log(k + v);
        this.state.form[k] = v;
        this.forceUpdate();

        console.log(this.state.form[k]);
    }

    isNull(string){
        if(string == "" || string == null){
            return true;
        }

        return false;
    }

    submit(){
        var username = this.state.form.username;
        var password = this.state.form.password;
        //console.log(this.isNull(username));
        if(this.isNull(username) || this.isNull(password)){
            alert("用户名或密码不能为空！");
        }else{
            //做一个请求，这里写死做测试
            if(username == "tom" && password == "123"){
                //做一个跳转
                alert("登录成功！")
            }else{
                //添加一个Dialog，点击确定返回登录页面并请客输入信息
                alert("用户名或密码错误！请重新输入！");
            }
        }
    }



    renderForm(){
        return(
            <Form labelPosition="right" labelWidth="80px" model={this.state.form}>
                <Form.Item label="用户名：">
                    <Input value={this.state.form.username} onChange={this.onFormChange.bind(this,'username')}></Input>
                </Form.Item>
                <Form.Item label="密码：">
                    <Input type="password"  onChange={this.onFormChange.bind(this,'password')}></Input>
                </Form.Item>
                <Button type="primary" onClick={this.submit.bind(this)}>登录</Button>
                <Button type="primary">重置</Button>
            </Form>
        );
    }


    render(){
        return(
            <div className= "Login">
                <div className="form">
                    {this.renderForm()}
                </div>
            </div>

        );

    }
}

export {Login};