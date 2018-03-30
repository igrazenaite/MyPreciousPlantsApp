import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
//import axios from 'axios';

const style={
    margin: 15,
};
  
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            password: ''
        }
    }

    login=()=>{
        /* security check and axios to find the correct user */
    }


    render(){
        return(
            <MuiThemeProvider>
                <form onSubmit={this.login} ref="form" open={this.props.open}>
                    <TextField
                        className="username"
                        id="inputUserName"
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        type="username"
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                    /> 
                    <br/>
                    <TextField
                        className="password"
                        id="inputPassword"
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                    <br/>
                    <RaisedButton type="submit" style={style} primary={true}
                        label="Login" id="loginButton" onClick={()=>this.login()}>
                    </RaisedButton>
                </form>
            </MuiThemeProvider>
        )
    }
}
export default Login;