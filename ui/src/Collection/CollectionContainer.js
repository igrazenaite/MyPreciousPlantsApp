import React, {Component} from 'react';
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
            <div>
                <div className="mainContainer">
                    <CollectionNavigation/>
                </div>
            </div>
        )
    }
}export default CollectionContainer