import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import CollectionNavigation from './CollectionNavigation';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {cyan500} from 'material-ui/styles/colors';
import axios from 'axios';
import CollectionTable from './CollectionTable';


const rowStyle={
    margin: 0,
    padding: 0,
}

const containerStyle={
    padding: 0,
}

const colStyle={
    padding: 0,
}

const drawerStyle={
    backgroundColor: cyan500,
    position: 'absolute',  
    top: '120px',
    padding: 0
  }

class CollectionContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            collection:[]
        }
    }

    render(){
        return(
            <MuiThemeProvider>
            <div>
                <Container fluid={true} style={containerStyle}>
                <Row style={rowStyle}>
                <Col md="12" style={colStyle}>
                    <AppBar className="collection" style={{height: '120px'}}
                        showMenuIconButton={false}>
                    </AppBar>  
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </Col>
                    </Row>
                </Container>
                <Container fluid={true} style={containerStyle}>
                    <Row style={rowStyle}>
                    <Col md="1" style={colStyle}>
                    <Drawer className="drawer"
                        containerStyle={drawerStyle} 
                        width={70} 
                        open={this.state.open}>
                    </Drawer>
                    </Col>   
                    <Col md="10" style={colStyle}>
                        <CollectionTable/> 
                        {/*  <CollectionNavigation/> */}
                    </Col>
                    <Col md="1" style={colStyle}>
                    <Drawer className="drawer" 
                        containerStyle={drawerStyle} 
                        width={70} openSecondary={true} 
                        open={this.state.open}>
                    </Drawer>
                    </Col>
                </Row>
                </Container>    
            </div>
            </MuiThemeProvider>
        )
    }
}export default CollectionContainer