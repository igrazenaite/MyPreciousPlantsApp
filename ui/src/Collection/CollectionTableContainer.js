import React, {Component} from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import {API} from '../Utils/Host';
import CollectionTableComponent from './CollectionTableComponent';
/* import CollectionNavigation from './CollectionNavigation'; */

class CollectionTableContainer extends Component{

    constructor() {
        super();

        this.state = {
            plants: [],
            plantInfo:[]
        }
    }

    componentWillMount(){
        axios
            .get(API+"/collection")
            .then((response) => {
                console.log(response);
                this.setState({plants: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(this.state);
    }

   /*  goToPlant = (plantId) => {
        axios.get(API+"/collection/" + plantId)
          .then((response) => {
            this.setState({ plantInfo: response.data })
          })
          .catch((error) => {
            console.log(error);   
          });
          console.log("plantInfo", this.state)
    } */
 

    render(){

        if (!this.state.plants) {
            return null;
        } 

        return(
            <div>    
                <h2>
                    Plant Collection
                </h2>
                <div className="collectionTable">
                    <CollectionTableComponent allPlants={this.state.plants}/>
                </div>
            </div>
        )
    }
    
}export default CollectionTableContainer;