import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeadMenu from './common/component/HeadMenu.js';
import App from './App';
import {Login} from './Login';
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
		<div>
			<HeadMenu />
			<Switch>
				<Route exact path="/" component={App}/> 
				<Route path="/login" component={Login}/>  
				<Route component={NoMatch} />
			</Switch>		
		</div>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
