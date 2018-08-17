import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {API} from '../Utils/Host';
import swal from 'sweetalert';
import '../Styles/Login.css';
import '../Utils/ButtonStyles.css'
import {grey900} from 'material-ui/styles/colors';

const styles = {

    errorStyle: {
      color: grey900,
    },
    underlineStyle: {
      borderColor: grey900,
    },
    floatingLabelStyle: {
      color: grey900,
      fontSize:'22px',
      fontFamily: 'Verdana'
    }
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

    render(){
        return(
            <MuiThemeProvider>
                <div>
                <form onSubmit={this.registerUser} ref="form" open={this.props.open}>
                    <h2 className="userLoginHeader">Registration</h2>
                    <TextField
                        className="userName"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                    /><br />

                    <TextField
                        className="password"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    /><br />

                    <TextField
                        className="password"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="Repeat Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ repeatPassword: newValue })}
                    /><br />

                    <button 
                        type="save" 
                        className="primary" 
                        onClick={(event)=>this.registerUser(event)}>
                        Register
                    </button>
                </form>
                </div>
            </MuiThemeProvider>
        )
    }

}export default NewUserRegistrationForm;