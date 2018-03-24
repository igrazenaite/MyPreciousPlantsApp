import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {API} from '../Host';

const styles = {
    button: {
      margin: 12,
    },
    exampleImageInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
    },
};

class NewPlantForm extends Component{
    constructor(props){
        super(props);
        this.state={
            /* imageUrl:'', */ 
            name:'',
            price:'',
            dateOfPurchase:'',
            placeOfPurchase:'',
            description:'',
            dateOfRepot:'',
            repotInfo:'',
            dateOfBloom:'',
            bloomInfo:'',
            notes:''
        }
    }

    /* updateImage=(event)=>{
        this.setState({imageUrl: event.target.value})
    } */

    submit=(event)=>{

        let newPlant={
           /*  imageUrl: this.state.imageUrl, */ 
            name: this.state.name,
            price: this.state.price,
            dateOfPurchase: this.state.dateOfPurchase,
            placeOfPurchase: this.state.placeOfPurchase,
            description: this.state.description,
            dateOfRepot: this.state.dateOfRepot,
            repotInfo: this.state.repotInfo,
            dateOfBloom: this.state.dateOfBloom,
            bloomInfo: this.state.bloomInfo,
            notes: this.state.notes
        }

        axios.post(API+"/collection/addNewPlant", newPlant)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(this.state);
        event.preventDefault();
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    {/* <RaisedButton
                        label="Choose an Image"
                        labelPosition="before"
                        style={styles.button}
                        containerElement="label"
                        >
                        <input type="file" 
                        style={styles.exampleImageInput}
                        value={this.state.imageUrl} 
                        onChange={this.updateImage} />
                    </RaisedButton><br/> */}
                    <TextField
                        floatingLabelText="Name"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ name: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Price"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ price: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Date Of Purchase"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ dateOfPurchase: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Place Of Purchase"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ placeOfPurchase: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Description"
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={5}
                        onChange={(event, newValue) => this.setState({ description: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Date Of Repot"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ dateOfRepot: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Repot Info"
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={5}
                        onChange={(event, newValue) => this.setState({ repotInfo: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Date Of Bloom"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ dateOfBloom: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Bloom Info"
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={5}
                        onChange={(event, newValue) => this.setState({ bloomInfo: newValue })}
                    /><br />
                    <TextField
                        floatingLabelText="Notes"
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={5}
                        onChange={(event, newValue) => this.setState({ notes: newValue })}
                    /><br />
                    <RaisedButton 
                        label="Submit" 
                        primary={true} 
                        style={styles} 
                        onClick={(event)=>this.submit(event)} 
                    />
                </div>
            </MuiThemeProvider>
            
        )
    }
}
export default NewPlantForm;