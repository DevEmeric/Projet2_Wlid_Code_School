import React, {Component} from "react";
import "./TournementVictory.css";


class TournementVictory extends Component {
    constructor (props) {
        super (props);
        this.state = {
            //isTournementFinished: true,
            whoIsWon: [], //Tableau Simon
            
          
        }

    }

    whoIsTheWinner = (scoreFighter) => {
        this.setState ({

            boutonHomePage:true,


        })
    }

    render(){
        let styleTournement = {
            




        }
        return (
            <div>
                <body className="bodyTournementVictory">

                    <p className= "titleWinners"> WINNERS </p>
                    <div className="gobleoffireimage"></div>
                    <a to="/houseSelection"><button className= "boutonTournementHomePage">Home Page</button></a>
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