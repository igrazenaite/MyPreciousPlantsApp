import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NewUserRegistrationForm from './User/NewUserRegistrationForm';
import CollectionContainer from './Collection/CollectionContainer';

var NoMatch = (props) =>{
  return <div>Page does not exist</div>;
}

var InitialApp=(props)=>{
  return <div>
  {props.children} </div>
}

ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={InitialApp}>
    <IndexRoute component={App}/>
    <Route path="/newUserRegistration" component={NewUserRegistrationForm}/>
    <Route path="/collection" component={CollectionContainer}/>
    <Route path="*" component={NoMatch}/>
    </Route>
  </Router>), 
  document.getElementById('root')
);

