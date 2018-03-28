import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import PlantCardComponent from '../Plant/PlantCardComponent';
import NewPlantForm from '../Plant/NewPlantForm';


class CollectionNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" name="home" component={App} />
                    <Route path="/collection/plant" name="singlePlant" component={PlantCardComponent}/>
                    <Route path="/collection/addNewPlant" name="addNewPlant" component={NewPlantForm}/>
                </Switch>
            </main>
        )
    }
}
export default CollectionNavigation;