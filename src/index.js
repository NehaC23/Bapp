import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route, Switch } from "react-router-dom";
import './styles/index.css';
import PasswordManage from './components/PasswordManage.js';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
   <Switch>
        <Route exact path='/' component={App} />
		<Route  path='/password-manage' component={PasswordManage}/>
    </Switch>
  </BrowserRouter>
, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
