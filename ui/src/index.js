import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import UsersMainPage from './User/UsersMainPage';

var NoMatch = (props) =>{
  return <div>Page does not exist</div>;
}

/* var InitialApp=(props)=>{
  return <div>
  {props.children} </div>
} */

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App}/> 
      <Route path="/collection" component={UsersMainPage}/>               
      <Route path="*" component={NoMatch}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

