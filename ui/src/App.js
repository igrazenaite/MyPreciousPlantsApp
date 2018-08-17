import React, { Component } from 'react';
import './App.css';
import MainPage from './User/MainPage';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      open: true
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="topnav">
            </div>
          </div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="row">
          <div className="col-sm-12 col-md-12">
              <h1>Welcome to My Precious Plants App!</h1>
              <br/>
              <p>
                Please <b> {'register'.toLocaleUpperCase()} </b> if you are new, or <b>{'login'.toLocaleUpperCase()}</b> to your account.
              </p>
              <br/>
          </div>
          </div>
          <div className="row">
              <MainPage/>
          </div>
        </div>    
      </div>
    );
  }
}

export default App;
