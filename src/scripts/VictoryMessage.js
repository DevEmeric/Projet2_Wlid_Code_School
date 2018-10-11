import React from 'react';
import './VictoryMessage.css'
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VictoryMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     modeTournoi: false

    };
  }


    /*this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }*/

  render() {
    return (
    <div>
      <div className="VictoryText">
        <p>CONGRATS YOU WON</p>
        <div className="ButtonChoice">{
        this.state.modeTournoi?

        <button style={{color:'white', backgroundColor:'orange',width: 100, height: 70,fontSize: 20, }} href="https://www.layoutit.com/build">Next Fight</button>
        :
        <button style={{color:'white', backgroundColor:'orange',width: 100, height: 70,fontSize: 20, }} href="https://www.layoutit.com/build">Start Again</button>
        }
        <button style={{color:'white', backgroundColor:'orange',width: 100, height: 70,fontSize: 20, }} href="https://www.layoutit.com/build">Home Page</button>
        </div>
      </div>
      

      
      {/* <div className="VictoryMessage" id={this.props.modal.id}>
      </div> */}
    </div>
    );
  }
}

export default VictoryMessage;
/*

{ <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> }
<Modal isOpen={this.state.modal} toggle={this.toggle}>
<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
<ModalBody>
  CONGRATS YOU WON
</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
</ModalFooter>
</Modal>
*/
