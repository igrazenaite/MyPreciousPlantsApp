import React from 'react';
import CollectionPlantComponent from './CollectionPlantComponent';
import { Link } from 'react-router-dom';
import '../Styles/Icons.css';

var CollectionTableComponent =(props)=>{

    var allPlants = props.allPlants;
    if (allPlants.length===0){
        return <div>All plants from server</div>
    } else {
        var plantDrawing = allPlants.map((plant)=>{
            return <CollectionPlantComponent key={plant.plantId} singlePlant={plant}/>
        })
        return <div className="someTable">
                <div className="topAddIcon">
                    <Link to={"/collection/addNewPlant"} id="icon" >
                        <span className="glyphicon glyphicon-plus-sign" id="addNewIcon-top" ></span>
                    </Link>
                </div>
                    <table className="table table-bordered">
                        <tr>
                            <th width="5%">Label ID</th>
                           {/*  <th width="5%">Thumbnail</th> */}
                            <th width="60%">Name</th> 
                            <th width="15%">Culture</th>
                            <th width="5%">Price</th>
                            <th width="10%">More...</th>
                        </tr>
                            {plantDrawing}
                    </table>
                    <div className="bottomAddIcon">
                        <Link to={"/collection/addNewPlant"} id="icon" >
                            <span className="glyphicon glyphicon-plus-sign" id="addNewIcon-bottom" ></span>
                        </Link>
                    </div>
                </div>
    }
};
export default CollectionTableComponent;