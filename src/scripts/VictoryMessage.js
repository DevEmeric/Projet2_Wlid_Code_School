import React from 'react';
import './VictoryMessage.css'

//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VictoryMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modeTournoi: true,
      turn:this.props.turn,
    };
  }
  nextFight=()=>{
    this.setState({
      turn:this.state.turn++
    })
    this.props.getCurrentFighter(this.state.turn);
  }

  restartFight=()=>{
    this.props.restartFight();
  }

  render() {

    let buttonStyle={
      color: 'white', 
      backgroundColor: 'orange', 
      width: 100, 
      height: 70, 
      fontSize: 20,
    }

    return (
      <div>
        <div className="VictoryText">
          <p>CONGRATS YOU WON</p>
          <div className="ButtonChoice">{
            this.state.modeTournoi ?

              <button style={buttonStyle} onClick={this.nextFight}>Next Fight</button>
              :
              <button style={buttonStyle} onClick={this.restartFight}>Start Again</button>
          }
              <a to="/"><button style={buttonStyle}>Home Page</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default VictoryMessage;
