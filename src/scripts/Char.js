import { Component } from 'react';

class Char extends Component {
  constructor(props){
    super(props)

    this.state = {
      health : this.props.health
    }





    /*this.house=props.house,
    this.name=props.name,
    this.healthPoints=props.health ? props.health : 100,
    this.shoot=props.shoot ? props.shoot : true,
    this.defend=props.defend ? props.defend : 3,
    this.isDefenseActive=props.isDefenseActive ? props.isDefenseActive : false,
    this.housePoints=props.housePoints ? props.housePoints : 0*/
  }
}
/*
class Char extends Component {
  
  constructor(props){
    this.house=props.house,
    this.name=props.name,
    this.healthPoints=props.health ? props.health : 100,
    this.shoot=props.shoot ? props.shoot : true,
    this.defend=props.defend ? props.defend : 3,
    this.isDefenseActive=props.isDefenseActive ? props.isDefenseActive : false,
    this.housePoints=props.housePoints ? props.housePoints : 0
  }

  
}

  render() {
    return (
      <div className="spell" id={this.props.house}>
      </div>
    );
  }
}*/

export default Char;
