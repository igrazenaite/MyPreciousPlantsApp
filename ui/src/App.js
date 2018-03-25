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
//import { Link } from 'react-router-dom';

/* const style={
  margin: 5,
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontFamily: 'Verdana'

} */

const drawerStyle={
  backgroundColor: cyan500,
  /* position: 'fixed', */ 
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
        <Col md="1">
          <Drawer className="drawer"
              containerStyle={drawerStyle} 
              width={70} 
              open={this.state.open}>
          </Drawer>
        </Col>  
        <Col md="1">
          <Drawer className="drawer" 
              containerStyle={drawerStyle} 
              width={70} openSecondary={true} 
              open={this.state.open}>
          </Drawer>
        </Col>
        <Col md="10">
            <h1>Welcome to My Precious Plants App!</h1>
          <p>
            Please {/* <Link to="/newUserRegistration" > */}register{/* </Link> */} if you are new, or login to your account.
          </p>
          {/* <button><h2 style={style}>{'Start exploring!'.toUpperCase()}</h2></button> */}
          </Col>
        </Row>
        </Container>    
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
