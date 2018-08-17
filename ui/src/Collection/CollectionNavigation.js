import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
//import AllCollectionsTable from './Collection/AllCollectionsTable';
import CollectionTable from './CollectionTable';
import PlantCardComponent from '../Plant/PlantCardComponent';
import NewPlantForm from '../Plant/NewPlantForm';


class CollectionNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    {/* <Route path="/collections" component={AllCollectionsTable}/> */}
                    <Route exact path="/collection" name="home" component={CollectionTable} />
                    <Route path="/collection/{plantId}" name="singlePlant" component={PlantCardComponent}/>
                    <Route path="/collection/addNewPlant" name="addNewPlant" component={NewPlantForm}/>
                </Switch>
            </main>
        )
    }
}
export default CollectionNavigation;