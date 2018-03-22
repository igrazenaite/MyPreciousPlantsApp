import React, {Component} from 'react';
import axios from 'axios';
import {API} from '../Host';
import swal from 'sweetalert';

class NewUserRegistrationForm extends Component{
    constructor(props){
        super(props);

        this.state={
            userName: '',
            password: '',
            repeatPassword: ''
        }
    }

    getUserName=(event)=>{
        this.setState({userName: event.target.value});
    }

    getPassword=(event)=>{
        this.setState({password: event.target.value});
    }
        
    getRepeatPassword=(event)=>{
        this.setState({repeatPassword: event.target.value});
    }

    userNameIsValid=()=>{
        if((this.state.userName.length>=5)&&(this.state.userName.length<=30)){
            return true;
        }else{
            swal({
              text:"Username is either too short or too long.",
              icon: "error",
              button: "OK",
            });
        }
    }

    passwordIsValid=()=>{
        if((this.state.password>=5)&&(this.state.password<=20)){
            return true;
        }else{
            swal({
              text:"Password is either too short or too long.",
              icon: "error",
              button: "OK",
            });
        }
    }
    passwordsDoMatch=()=>{
        if(this.state.password===this.state.repeatPassword){
            return true;
        }else{
            swal({
              text:"Password does not match the repeated password! Please try again.",
              icon: "error",
              button: "OK",
            });
        }
    }

    dataIsValid=()=>{
        if(this.userNameIsValid()&&this.passwordsDoMatch()){
            return true;
        }
    }

    registerUser=(event)=>{

        if(this.dataIsValid()){ 
            
            let userInfo={
                userName: this.state.userName,
                password: this.state.password
            }

            axios.post(API+'/newUserRegistration', {userInfo})
            .then((response)=>{
                console.log("Registration successful");
                this.refs.form.reset();
            })
            .catch((error)=>{
                console.log(error)
            })
            this.refs.form.reset();
            console.log(this.state);
            event.preventDefault();
        }

    }

    goMain = () => this.props.router.push("/");

    render(){
        return(
            <div className="row">
            <div className="col-sm-12 col-md-12">
                <button onClick={this.goMain}>Back to Main Page</button>
                <form onSubmit={this.registerUser} ref="form" open={this.props.open}>
                    <div className="text-field">
                    <label htmlFor="userName">Username: </label>
                    <input type="text"  value={this.state.userName}  onChange={this.getUserName}/>
                    </div><br/>

                    <div className="text-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" value={this.state.password} onChange={this.getPassword}/>
                    </div><br/>

                    <div className="text-field">
                    <label htmlFor="repeatPassword">Repeat password: </label>
                    <input type="password" value={this.state.repeatPassword} onChange={this.getRepeatPassword}/>
                    </div><br/>

                    <button type="save" className="btn btn-default" onClick={this.registerUser}>Register</button>

                </form>
            </div>
            </div>
        )
    }

}export default NewUserRegistrationForm;