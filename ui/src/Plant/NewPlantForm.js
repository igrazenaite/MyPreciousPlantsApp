import React, {Component} from 'react';
import axios from 'axios';
import {API} from '../Utils/Host';
import { Link } from 'react-router-dom';
import '../Styles/Forms.css';
import '../Styles/Buttons.css';


class NewPlantForm extends Component{
    constructor(props){
        super(props);
        this.state={
            /* imageUrl:'', */ 
            name:'',
            price:'',
            dateOfPurchase:'',
            placeOfPurchase:'',
            description:'',
            dateOfRepot:'',
            repotInfo:'',
            dateOfBloom:'',
            bloomInfo:'',
            notes:''
        }
    }

    /* updateImage=(event)=>{
        this.setState({imageUrl: event.target.value})
    } */

    submit=(event)=>{

        let newPlant={
           /*  imageUrl: this.state.imageUrl, */ 
            name: this.state.name,
            price: this.state.price,
            dateOfPurchase: this.state.dateOfPurchase,
            placeOfPurchase: this.state.placeOfPurchase,
            description: this.state.description,
            dateOfRepot: this.state.dateOfRepot,
            repotInfo: this.state.repotInfo,
            dateOfBloom: this.state.dateOfBloom,
            bloomInfo: this.state.bloomInfo,
            notes: this.state.notes
        }

        axios.post(API+"/collection/addNewPlant", newPlant)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(this.state);
        event.preventDefault();
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
                <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-3">
                    <Link to={"/collection"} className="backButton">
                        <span className="glyphicon glyphicon-arrow-left" ></span>
                    </Link>
                    </div>
                <div className="col-sm-6 col-md-6">
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input className="inputBox" type="text" name ="name" value={this.state.name} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="price">Price: </label>
                        <input className="inputBox" type="text" name ="price" value={this.state.price} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="dateOfPurchase">Date Of Purchase: </label>
                        <input className="inputBox" type="text" name ="dateOfPurchase" value={this.state.dateOfPurchase} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="placeOfPurchase">Place Of Purchase: </label>
                        <input className="inputBox" type="text" name ="placeOfPurchase" value={this.state.placeOfPurchase} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="description">Description: </label>
                        <textarea className="inputBox" rows="2" name ="description" value={this.state.description} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="dateOfRepot">Date Of Repot: </label>
                        <input className="inputBox" type="text" name ="dateOfRepot" value={this.state.dateOfRepot} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="repotInfo">Repot Info: </label>
                        <textarea className="inputBox" rows="2" name ="repotInfo" value={this.state.repotInfo} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="dateOfBloom">Date Of Bloom: </label>
                        <input className="inputBox" type="text" name ="dateOfBloom" value={this.state.dateOfBloom} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="bloomInfo">Bloom Info: </label>
                        <textarea className="inputBox" rows="2" name ="bloomInfo" value={this.state.bloomInfo} onChange={this.handleChange}/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="notes">Notes: </label>
                        <textarea className="inputBox" rows="2" name ="notes" value={this.state.notes} onChange={this.handleChange}/>
                    </div><br/>                          
                    </form >
                    </div>
                        <div className="col-sm-3 col-md-3">
                        </div>
                    </div>
                    <button 
                        type="save" 
                        className="primary" 
                        onClick={(event)=>this.submit(event)}>
                        Submit
                    </button> 
                </div>
            
        )
    }
}
export default NewPlantForm;