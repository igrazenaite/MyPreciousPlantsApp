import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {API} from '../Host';
import swal from 'sweetalert';

const styles = {
      margin: 12
}

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

    /* goMain = () => this.props.router.push("/"); */

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    {/* <RaisedButton 
                        label="Go to Main" 
                        primary={false} 
                        style={styles} 
                        onClick={()=>this.goMain()} 
                    /> */}
                <form onSubmit={this.registerUser} ref="form" open={this.props.open}>
                    <TextField
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                    /><br />

                    <TextField
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    /><br />

                    <TextField
                        floatingLabelText="Repeat Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ repeatPassword: newValue })}
                    /><br />

                    <RaisedButton 
                        label="Register" 
                        primary={true} 
                        style={styles} 
                        onClick={(event)=>this.registerUser(event)} 
                    />

                </form>
                </div>
            </MuiThemeProvider>
        )
    }

}export default NewUserRegistrationForm;