import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
  } from 'material-ui/Table';
import {API} from '../Host';
import CollectionComponent from './CollectionComponent'

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
            .get(API+"/collection/plants")
            .then((response) => {
                console.log(response);
                this.setState({plants: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){

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
                  tooltip="Price">Price</TableHeaderColumn>
                  <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Description">Description</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                >
                    <CollectionComponent plantsList={this.state.plants}/>
                </TableBody>
                </Table>      
            </div>
            </MuiThemeProvider>
        )
    }

    
}export default CollectionContainer;