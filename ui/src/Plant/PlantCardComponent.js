import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import axios from 'axios';
//import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import Modal from './Modal';
//import {API} from '../Host';

class PlantCardComponent extends Component{
   /*  constructor(props){
        super(props);
        this.state={
            open: false,
            showModal: false,
        };
    }  */

/* 
    openModal = (plantId) => {
            this.setState({ showModal: !this.state.showModal })
    }
      
      closeModal=()=>{
        this.setState({showModal: false})
    } */

    /* componentWillMount=(plantId)=>{
        axios.get(API+"/collection/" + plantId)
          .then((response) => {
            this.setState({ plantInfo: response.data })
          })
          .catch((error) => {
            console.log(error);
    
          });
        console.log(this.state);
    } */

    render(){

        /* if (!this.props.plantInfo){
            return null;
        } */

        console.log("plantinfo", this.props.plantsList);
        
       /*  const actions =
            (<FlatButton
                label="Back"
                primary={true}
                onClick={this.props.closeAction}
            />);
 */
        const singlePlant=(
            /*<div className="thumbnail">
                <img className="Image" 
                    src={plantInfo} 
                    alt="plant"/>
            </div> */
            <div className="caption">
                <h3>Id: {this.props.params.plantId}</h3>
                <p>Name: {this.props.params.name}</p>
                <p>Price: {this.props.params.price}€</p>
                <p>Date of purchase: {this.props.params.dateOfPurchase}</p>
                <p>Place of purchase: {this.props.params.placeOfPurchase}</p>
                <p>Description: {this.props.params.description}</p>
                <p>Repotting history: {this.props.params.repotting}</p>
                <p>Blooming history: {this.props.params.blooming}</p>
                <p>Notes: {this.props.params.notes}</p>
                <FlatButton
                label="Open"
                primary={true}
                /* onClick={()=>this.openModal(this.props.params.description)} */
            /> 
            </div>

        )

        return(
            <MuiThemeProvider>
                <div>
                    {/* <Dialog
                        title="Plant"
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                        autoScrollBodyContent={true}
                    > */}
                        {singlePlant}
                    {/* </Dialog> */}
                    {/* <Modal
                        open={this.state.showModal}
                        closeAction={this.closeModal}
                        plantInfo={this.state.plantInfo}/> */}
                </div>
            </MuiThemeProvider>
        )
    }
}
export default PlantCardComponent;