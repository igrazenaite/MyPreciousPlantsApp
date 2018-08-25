import React from 'react';
import '../Styles/Tables.css'

var CollectionPlantComponent = (props)=>{
    var plant = props.singlePlant;
    return  <tr>
                <td width="5%">{plant.plantLabel}</td>
                {/* <td width="5%">{plant.imageUrl}</td> */}
                <td width="60%">{plant.name}</td>
                <td width="15%">{plant.cultureIcons}</td>
                <td width="5%">{plant.price}</td>
                <td width="10%">...</td>
            </tr>

}

export default CollectionPlantComponent;