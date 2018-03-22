import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const style={
  margin: 5,
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontFamily: 'Verdana'

}
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
          <h1>Welcome to My Precious Plants App!</h1>
        <p className="App-intro">
          Please register if you are new, or login to your account.
        </p>
        <button><h2 style={style}>{'Start exploring!'.toUpperCase()}</h2></button>
      </div>
    );
  }
}

export default App;
