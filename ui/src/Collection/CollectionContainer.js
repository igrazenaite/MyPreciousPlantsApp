import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CollectionNavigation from './CollectionNavigation';


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
                <div className="mainContainer">
                    <div className="row">
                        <div className="col-sm-1 col-md-1"/>
                        <div className="col-sm-10 col-md-10">
                            <CollectionNavigation/>
                        </div>
                        <div className="col-sm-1 col-md-1"/>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}export default CollectionContainer