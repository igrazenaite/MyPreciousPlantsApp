import React, {Component} from 'react';
import axios from 'axios';
//import Dialog from 'material-ui/Dialog';
//import Modal from './Modal';
import {API} from '../Utils/Host';
import { Link } from 'react-router-dom';

class PlantCardComponent extends Component{
    /*constructor(props){
        super(props);
         this.state={
            plantInfo:[]
        } 
    }*/

    /* componentWillMount=()=>{
        axios.get(API+"/collection/" + this.props.plant.plantId)
        .then((response) => {
            this.setState({ plantInfo: response.data })
        })
        .catch((error) => {
            console.log(error);   
        });
          console.log("plantInfo", this.state)
    }
 */
    render(){
        return(
            <div>
                
                <h2>{this.props.plant.name}</h2> 
                {/* <img>{this.props.plant.imageUrl}</img> */}
                <p>{this.props.plant.plantLabel}</p> 
                <p>{this.props.plant.dateOfPurchase}</p>
                <p>{this.props.plant.placeOfPurchase}</p>
                <p>{this.props.plant.cultureIcons}</p> 
                <p>{this.props.plant.price}</p> 
                <p>{this.props.plant.description}</p> 
                <Link to="/collection" 
                        role="button" 
                        type="submit" 
                        className="modalButton" 
                        onClick={()=>this.openBloomingsModal()}>
                        Bloomings
                </Link>
                <Link to="/collection" 
                        role="button" 
                        type="submit" 
                        className="modalButton" 
                        onClick={()=>this.openRepottingsModal()}>
                        Repottings
                </Link>
            </div>
        );
    } 
};
export default PlantCardComponent;