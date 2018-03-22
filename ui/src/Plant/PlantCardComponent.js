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
                        <p>Quantity: {this.props.plant.quantity}</p>
                        <p>Description: {this.props.plant.description}</p>
                        <p><button className="btn btn-default">More</button></p> 
                        <p><button className="btn btn-primary">Buy</button></p>  
                    </div>
                </div>
            </div>
        )
    }
}
export default PlantCardComponent;