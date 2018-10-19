import React, {Component} from "react";
import "./TournementVictory.css";
import { Link } from "react-router-dom";


class TournementVictory extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isTournementFinished: true,
            whoIsWon: [],
            
          
        }

    }

    isTournementFinished = () => {
        this.setState ({

            boutonHomePage:true,


        })
    }

    render(){
        return (
            <div>
                <body className="bodyTournementVictory">

                    <p className= "titleWinners"> WINNERS </p>
                    <div className="gobleoffireimage"></div>
                    <Link to = "/"><button className= "boutonTournementHomePage">Home Page</button></Link>
                    <div className="boutonPodium"></div>
                    <div className= "firstAward"></div>
                    <div className= "secondAward"></div>
                    <div className= "thirdAward"></div>

                </body>
            </div>

        );
    }

}
export default TournementVictory;