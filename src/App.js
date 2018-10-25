import React, { Component } from 'react';
import './App.css';
import Fight from './scripts/Fight';
import HouseSelection from './scripts/HouseSelection';
import TournementVictory from './scripts/TournementVictory';
import HomePage from "./scripts/HomePage"
//import Char from'./scripts/Char';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends Component { 
  constructor() {
    super();
    this.state = {
      gameType: "tournament",
      fightersHouse: ["Gryffindor", "Slytherin", "Hufflepuff"],
      isEndTournament: [],
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



  getGameType = (choice) => {
    this.setState({ gameType: choice })
  }

  getFinalSelection = (players) => {
    this.setState({ fightersHouse: players})
  }
  endTournament = (scoreFighters) => {
    this.setState({isEndTournament: scoreFighters})
  }

  


 
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/HouseSelection"
              render={() => (
                <HouseSelection
                finalSelection={this.getFinalSelection}
                gameType={this.state.gameType}
                />)}
            />
            <Route
              path="/Fight"
              render={() => (
                <Fight
                  fightersHouse={this.state.fightersHouse}
                  endTournament= {this.endTournament}
                />)}
            />
            <Route
              path="/TournementVictory"
              render={() => (
                <TournementVictory
                  isEndtournament={this.state.isEndTournament}
                  
                />)}
            />
            <Route
              exact path="/"
              render={() => (
                <HomePage gameType={this.getGameType} />)}
            />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;