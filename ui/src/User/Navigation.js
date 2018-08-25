import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionContainer from '../Collection/CollectionContainer';



class Navigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                   <Route path="/collection" component={CollectionContainer}/>      
                </Switch>    
            </main>
        )
    }
}export default Navigation;