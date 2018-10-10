import React, { Component } from 'react';
import './App.css';
import Fight from './scripts/Fight';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      playersHouse: ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"],
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
 
  render() {
    console.log(this.state.playersHouse)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/fight"
              render={() => (
                <Fight
                  fightersHouse={this.state.playersHouse}
                />)}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;