import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home.js';
import {Login} from './Login/Login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);



ReactDOM.render(<BrowserRouter basename="/">
		<div style={{width:"1200px",margin:"auto"}}>
			<Switch>
				<Route exact path="/" component={Home}/> 
				<Route path="/login" component={Login}/>  
				<Route component={NoMatch} />
			</Switch>		
		</div>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
