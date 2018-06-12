import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NewUserRegistrationForm from './User/NewUserRegistrationForm';
import CollectionContainer from './Collection/CollectionContainer';
import PlantCardComponent from './Plant/PlantCardComponent'
import NewPlantForm from './Plant/NewPlantForm';
import Login from './User/Login';

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
      <Route path="/newUserRegistration" component={NewUserRegistrationForm}/>
      <Route path="/login" component={Login}/>
      <Route path="/collection" component={CollectionContainer}/> 
      <Route path="/collection/:plantId" component={PlantCardComponent}/>
      <Route path="/addNewPlant" component={NewPlantForm}/>
      <Route path="*" component={NoMatch}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

