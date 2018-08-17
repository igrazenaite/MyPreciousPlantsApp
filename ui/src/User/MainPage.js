import React, {Component} from 'react';
import Login from './Login';
import NewUserRegistrationForm from './NewUserRegistrationForm';

class MainPage extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <NewUserRegistrationForm/>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <Login/>
                    </div>
                </div>
            </div>
        )
    }
    
}export default MainPage