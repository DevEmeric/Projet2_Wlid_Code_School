import React from 'react';
import './VictoryMessage.css'
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VictoryMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modeTournoi: false,
      turn:this.props.turn,
    };
  }
  nextFight=()=>{
    this.setState({
        turn:this.state.turn++
    })
    this.props.getCurrentFighter(this.state.turn);
  }

  render() {
    return (
      <div>
        <div className="VictoryText">
          <p>CONGRATS YOU WON</p>
          <div className="ButtonChoice">{
            this.state.modeTournoi ?

              <button style={{ color: 'white', backgroundColor: 'orange', width: 100, height: 70, fontSize: 20, }} onClick={this.nextFight}>Next Fight</button>
              :
              <a href="/fight"><button style={{ color: 'white', backgroundColor: 'orange', width: 100, height: 70, fontSize: 20, }}>Start Again</button></a>
          }
            <button style={{ color: 'white', backgroundColor: 'orange', width: 100, height: 70, fontSize: 20, }} href="https://www.layoutit.com/build">Home Page</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VictoryMessage;
