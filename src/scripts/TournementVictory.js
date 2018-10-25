import React, {Component} from "react";
import "./TournementVictory.css";
import Fight from './Fight'
import { Link } from "react-router-dom";


class TournementVictory extends Component {
    constructor (props) {
        super (props);
        this.state = {
            
            
            
          
        }

    }

    whoIsTheWinner = () => {
        this.props.scoreFighters.sort(function(a, b){
            return  this.props.scoreFighters.point.a - this.props.scoreFighters.point.b;
        });
       console.log(this.props.scoreFighters);

    }

    render(){
        let styleTournement = {
            




        }
        return (
            <div>
                
                <body className="bodyTournementVictory">

                    <p className= "titleWinners"> WINNERS </p>
                    <div className="gobleoffireimage"></div>
                    <Link to = "/"><button className= "boutonTournementHomePage">Home Page</button></Link>
                    <div className="boutonPodium"></div>
                    <div className= "firstAward" ></div>
                    <div className= "secondAward"></div>
                    <div className= "thirdAward"></div>

                </body>
            </div>

        );
    }

}
export default TournementVictory;