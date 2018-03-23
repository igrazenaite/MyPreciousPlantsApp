import React, {Component} from 'react';

class PlantCardComponent extends Component{
    /* constructor(props){
        super(props)
    } */
    render(){
        return(
            <div className="row">
                <div className="col-sm-12 col-md-12">
                   {/*  <div className="thumbnail">
                    <img className="Image" 
                        src={plant} 
                        alt="plant"/>
                     </div> */}
                     <div className="caption">
                        <h3>{this.props.plant.name}</h3>
                        <p>Price: {this.props.plant.price}$</p>
                        <p>Date of purchase: {this.props.plant.dateOfPurchase}</p>
                        <p>Place of purchase: {this.props.plant.placeOfPurchase}</p>
                        <p>Description: {this.props.plant.description}</p>
                        <p>Repotting history: {this.props.plant.repotting}</p>
                        <p>Blooming history: {this.props.plant.blooming}</p>
                        <p>Notes: {this.props.plant.notes}</p>
                        <p><button className="btn btn-default">Back</button></p> 
                    </div>
                </div>
            </div>
        )
    }
}
export default PlantCardComponent;