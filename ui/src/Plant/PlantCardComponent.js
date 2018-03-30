import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import Modal from './Modal';

class PlantCardComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            showModal: false,
        };
    } 

/* 
    openModal = (plantId) => {
            this.setState({ showModal: !this.state.showModal })
    }
      
      closeModal=()=>{
        this.setState({showModal: false})
    } */

    render(){

        if (!this.props.plantInfo){
            return null;
        }

        console.log(this.props.plantInfo);
        
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
                <h3>{this.props.plantInfo.name}</h3>
                <p>Price: {this.props.plantInfo.price}€</p>
                <p>Date of purchase: {this.props.plantInfo.dateOfPurchase}</p>
                <p>Place of purchase: {this.props.plantInfo.placeOfPurchase}</p>
                <p>Description: {this.props.plantInfo.description}</p>
                <p>Repotting history: {this.props.plantInfo.repotting}</p>
                <p>Blooming history: {this.props.plantInfo.blooming}</p>
                <p>Notes: {this.props.plantInfo.notes}</p>
                <FlatButton
                label="Open"
                primary={true}
                /* onClick={()=>this.openModal(this.props.plantInfo.description)} */
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