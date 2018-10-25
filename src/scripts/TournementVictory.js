import React, {Component} from "react";
import "./TournementVictory.css";
import { Link } from "react-router-dom";


import gryffindorTeam from '../image/Gryffindor.png'
import slytherinTeam from '../image/Slytherin.png'
import ravenclawTeam from '../image/Ravenclaw.png'
import hufflepuffTeam from '../image/Hufflepuff.png'


class TournementVictory extends Component {
    constructor (props) {
        super (props);
        this.logosTeams = {
            GryffindorLogo: {
                logo: gryffindorTeam
            },

            SlyherinLogo: {
                logo: slytherinTeam
            },
            RavenclawLogo: {
                logo: ravenclawTeam
            },

            HufflepuffLogo: {
                logo: hufflepuffTeam
            },
           
            /*state = {
                win: [],*/
        }            
        }
        

    }

    whoIsTheWinner = () => {
        this.props.scoreFighters.sort(function(a, b){
            return  this.props.scoreFighters.point.a - this.props.scoreFighters.point.b;
        });W
        
        //this.setState((state) => ({whoIsTheWinner: this.state.win + 1}));
    


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