import React from 'react';
//import PlantComponent from '../Plant/PlantComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

var CollectionComponent =(props)=>{
    var plantsList=props.plantsList;
    if(plantsList.length===0){
        return <TableRow>
                <TableRowColumn>No plants found!</TableRowColumn>
               </TableRow>
    }else{
        var plantsListDrawing = plantsList.map((plant, index) => (
            <TableRow key={index} >
                <TableRowColumn>{plant.name}</TableRowColumn>
                <TableRowColumn>{plant.price}</TableRowColumn>
                <TableRowColumn>{plant.description}</TableRowColumn>
            </TableRow>
    ))
        return <MuiThemeProvider>
            <div>{plantsListDrawing}</div>
            </MuiThemeProvider>
    }

}
export default CollectionComponent;