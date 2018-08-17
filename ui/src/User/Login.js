import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import '../Utils/ButtonStyles.css'
import {grey900} from 'material-ui/styles/colors';
//import axios from 'axios';

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
                    <h2 className="userLoginHeader">Login</h2>
                    <TextField
                        className="username"
                        id="inputUserName"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        type="username"
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                    /> 
                    <br/>
                    <TextField
                        className="password"
                        id="inputPassword"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        type="password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                    <br/>
                    <Link to="/collection" 
                        role="button" 
                        type="submit" 
                        className="primary" 
                        onClick={()=>this.login()}>
                        Login
                    </Link>
                </form>
            </MuiThemeProvider>
        )
    }
}
export default Login;