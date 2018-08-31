import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Tables.css';
import '../Styles/Icons.css';

var CollectionPlantComponent = (props)=>{
    var plant = props.singlePlant;
    return  <tr>
                <td width="5%">{plant.plantLabel}</td>
                {/* <td width="5%">{plant.imageUrl}</td> */}
                <td width="60%">{plant.name}</td>
                <td width="15%">{plant.cultureIcons}</td>
                <td width="5%">{plant.price}</td>
                <td width="10%">
                    <Link to={"/collection/" + plant.plantId} className="moreIcons">
                        <span className="glyphicon glyphicon-info-sign" id="infoIcon" ></span>
                    </Link>
                    <Link to={"/collection"} className="moreIcons"> 
                        <span className="glyphicon glyphicon-trash" id="deleteIcon"></span>
                    </Link>
                ...</td>
            </tr>

}

export default CollectionPlantComponent;