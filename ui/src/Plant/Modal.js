import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Modal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return(
            <MuiThemeProvider>
                <div>
                </div>
            </MuiThemeProvider>
        )
    }
}export default Modal;