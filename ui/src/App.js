import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {cyan500} from 'material-ui/styles/colors';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import NewUserRegistrationForm from './User/NewUserRegistrationForm';
import Login from './User/Login';

/* const style={
  margin: 5,
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontFamily: 'Verdana'

} */

const drawerStyle={
  backgroundColor: cyan500,
  position: 'absolute', 
  top: '120px'
}

const containerStyle={
  padding: 0,
}

const rowStyle={
  margin: 0,
  padding: 0
}

const colStyle={
  padding: 0
}

const SideBarLeft=()=>{
  return(
    <Col md="1">
          <Drawer className="drawer"
              containerStyle={drawerStyle} 
              width={70} 
              open={this.open}>
          </Drawer>
        </Col>  
  )
}

const SideBarRight=()=>{
  return(
    <Col md="1">
        <Drawer className="drawer" 
          containerStyle={drawerStyle} 
          width={70} openSecondary={true} 
          open={this.open}>
        </Drawer>
    </Col>)
}

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      open: true
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
      <Container fluid={true} style={containerStyle}>
        <Row style={rowStyle}>
        <Col md="12" style={colStyle}>
          <AppBar className="helloUser" style={{height: '120px'}}
                showMenuIconButton={false}>
          </AppBar>  
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </Col>
        </Row>
      </Container>
      <Container fluid={true} style={containerStyle}>
        <Row style={rowStyle}>
          <SideBarLeft/>
        <Col md="10">
            <h1>Welcome to My Precious Plants App!</h1>
          <p>
            Please <b> {'register'.toLocaleUpperCase()} </b> if you are new, or <b>{'login'.toLocaleUpperCase()}</b> to your account.
          </p>
          <br/>
        </Col>
          <SideBarRight/>
        </Row>
        <Row>
          <SideBarLeft/>
        <Col md="5">
          <NewUserRegistrationForm/>
        </Col>
        <Col md="5">
          <Login/>
        </Col>
          <SideBarRight/>
        </Row>
        </Container>    
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
