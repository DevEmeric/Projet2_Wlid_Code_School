import React, { Component } from 'react';
import './App.css';
import Fight from './scripts/Fight';
import HouseSelection from './scripts/HouseSelection';
import TournementVictory from './scripts/TournementVictory';
//import Char from'./scripts/Char';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends Component { 
  constructor() {
    super();
    this.state = {
      fightersHouse: ["Gryffindor", "Slytherin", "Hufflepuff"],
      isEndTournement: true,
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
    this.setState({ fightersHouse: players})
  }
 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <HouseSelection
                finalSelection={this.finalSelection}
                />)}
            />
            <Route
              path="/fight"
              render={() => (
                <Fight
                  fightersHouse={this.state.fightersHouse}
                />)}
            />
            <Route
              path="/TournementVictory"
              render={() => (
                <TournementVictory
                  isEndTournement={this.state.isEndTournement}
                />)}
            />

          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;