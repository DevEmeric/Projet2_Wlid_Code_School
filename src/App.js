import React, { Component } from 'react';
import './App.css';
import Fight from './scripts/Fight';
import HouseSelection from './scripts/HouseSelection';
//import Char from'./scripts/Char';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        playerHouse: [],
      }
  }  

  /*
  <Route exact path="/" component={Home} />
  <Route path="/settings" component={Settings} />
  <Route path="/instructions" component={Instructions} />
  <Route path="/house" component={HouseSelection} />
  <Route path="/arena" component={ArenaSelection} />
  <Route path="/victory" component={Victory} />
  */



  finalSelection = (players) => {
    this.setState({ playerHouse: players})
  }
 
  render() {
    console.log("PlayerHouse", this.state.playerHouse)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/HouseSelection" component={HouseSelection} />
            <Route
              path="/fight"
              render={() => (
                <Fight
                  fightersHouse={this.state.playersHouse}
                />)}
            />
          </Switch>
        </BrowserRouter>
        <HouseSelection finalSelection={this.finalSelection} />
      </div>
    );
  }
}

export default App;