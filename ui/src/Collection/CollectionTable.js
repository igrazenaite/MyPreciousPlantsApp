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
//import { Link } from 'react-router-dom';
import {API} from '../Host';
//import PlantCardComponent from '../Plant/PlantCardComponent';
/* import CollectionNavigation from './CollectionNavigation'; */

const styles ={
    marginLeft: 0,
    marginRight: 0,
    padding: 0
    
}

class CollectionTable extends Component{

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

            plants: [],
            plantId:'',
            name:'',
            price:'',
            dateOfPurchase:'',
            placeOfPurchase:'',
            description:'',
            dateOfRepot:'',
            repotInfo:'',
            dateOfBloom:'',
            bloomInfo:'',
            notes:'',

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

    goToPlant = (plantId) => {
        axios.get(API+"/collection/" + plantId)
          .then((response) => {
            this.setState({ plantInfo: response.data })
            this.setState({ showModal: !this.state.showModal })
          })
          .catch((error) => {
            console.log(error);
    
          })
          /* return(
            <link href="/collection/:plantId"/>
          ) */
           this.props.router.push("/collection/:plantId"); 
    }
    /*  
      closeModal=()=>{
        this.setState({showModal: false})
    } */

    render(){

        if (!this.state.plants) {
            return null;
        }
    

        console.log("plantId", this.state.plantId)
      
        var plantsList = this.state.plants.map((plant, index) => (
            <TableRow key={index} >
                <TableRowColumn>{plant.plantId}</TableRowColumn>
                <TableRowColumn>{plant.name}</TableRowColumn>
                {/* <TableRowColumn>{plant.imageUrl}</TableRowColumn> */}
                <TableRowColumn>
                <FlatButton id="moreButton" label="More" 
                primary={true} onClick={()=>this.goToPlant(plant.plantId)} />
              </TableRowColumn>
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
                {/*<PlantCardComponent
                     open={this.state.showModal}
                    closeAction={this.closeModal}
                plantInfo={this.state.plantInfo} /> */  }  
            </div>
            </MuiThemeProvider>
        )
    }

    
}export default CollectionTable;