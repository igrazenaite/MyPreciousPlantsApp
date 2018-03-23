import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import {API} from '../Host';

const styles ={
    marginLeft: 0,
    marginRight: 10,
    padding: 0
    
}

class CollectionContainer extends Component{

    constructor() {
        super();

        this.state = {
            fixedHeader: true,
            showRowHover: true,
            showCheckboxes: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            showModal: false,

            plants: []
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
    }

    render(){
        var plantsList = this.state.plants.map((plant, index) => (
            <TableRow key={index} >
                <TableRowColumn>{plant.plantId}</TableRowColumn>
                <TableRowColumn>{plant.name}</TableRowColumn>
                {/* <TableRowColumn>{plant.imgUrl}</TableRowColumn> */}
                <TableRowColumn><FlatButton id="moreButton" label="More" 
              primary={true} /* onClick={()=>this.openModal(plant.plantId)} *//></TableRowColumn>
            </TableRow>
    ))

        return(
            <MuiThemeProvider>
            <div>
                <Table
                    height={this.state.height}
                    style={styles}
                    fixedHeader={this.state.fixedHeader}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                >
                <TableRow>
                    <TableHeaderColumn colSpan="3" tooltip="Collection" style={{textAlign: 'center'}}>
                    Plant Collection</TableHeaderColumn>
                </TableRow>
                <TableRow>
                {/* <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Picture">Picture</TableHeaderColumn> */}
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="PlantId">Id</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Name">Name</TableHeaderColumn> 
                  <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="More">Information</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                >
                    {plantsList}
                </TableBody>
                </Table>      
            </div>
            </MuiThemeProvider>
        )
    }

    
}export default CollectionContainer;