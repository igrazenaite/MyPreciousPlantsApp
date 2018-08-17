import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation';


class UsersMainPage extends Component {

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
              <div className="search-container">
               {/*  <form action="/action_page.php"> */}
                  <input type="text" placeholder="Search.."/>
                  <button type="submit">Search</button>  
              
                <select className="menu" value={this.state.value} /* onClick={()=>this.showLinks()} */>
                  <option id="something" value={""}>Hello, user</option>
                  <option id="somethingelse" value={"somethingelse"}>Settings</option>
                  <option id="onemore" value={"onemore"}>Logout</option>
                </select>
                {/* </form> */}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="row">
          <div className="col-sm-12 col-md-12">
              <Navigation/>
          </div>
        </div>    
      </div>
    </div>
    );
  }
}

export default UsersMainPage;
