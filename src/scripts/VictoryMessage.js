import React from 'react';
import './VictoryMessage.css'
import { Link } from "react-router-dom";

//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VictoryMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modeTournoi: this.props.gameType === "1v1" ? false : true,
      turn:this.props.turn,
    };
  }

  nextFight=()=>{
    console.log("Next fight in Victory message")
    this.setState({
      turn:this.state.turn++
    })
    this.props.nextFight(this.state.turn);
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
              <Link to="/"><button style={buttonStyle}>Home Page</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VictoryMessage;
