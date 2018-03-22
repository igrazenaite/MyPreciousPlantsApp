import React from 'react';

var PlantComponent = (props)=>{
    var plant = props.singlePlant;
    return <span>{plant.imageurl}<br/>
                Name: {plant.name}<br/>
                Price: {plant.price} $<br/>
                Quantity: {plant.quantity}<br/>
                Description: {plant.description}<br/>
                <p><button className="btn btn-primary">Buy</button></p>
    </span>

}

export default PlantComponent;