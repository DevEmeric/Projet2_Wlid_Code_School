import React, { Component } from 'react';
import Fighter from './Fighter';
import Spell from './Spell';
import Header from './Header';
import Instructions from './Instructions'
import './Fight.css';
import VictoryMessage from "./VictoryMessage"
import TournementVictory from "./TournementVictory"
import Wall from "./wallFight.js"
//import ReactDOM from 'react-dom';
import Shield from "./Shield.js"
import { Redirect } from 'react-router'
import { Link } from "react-router-dom"



import GryffindorShield from '../image/gryffindor2.png'
import SlytherinShield from '../image/slytherin2.png'
import RavenclawShield from '../image/ravenclaw2.png'
import HufflepuffShield from '../image/hufflepuff2.png'

import spellSound from '../sound/attackSound.wav'
import shieldSound from '../sound/defenseSound.mp3'


class Fight extends Component {

    constructor() {
        super();

        this.spellSound = new Audio(spellSound);
        this.shieldSound = new Audio(shieldSound);

        this.houseStyles = {
            Gryffindor: {
                shield: GryffindorShield,
                barColor: "red",
            },
            Slytherin: {
                shield: SlytherinShield,
                barColor: "green",
            },
            Ravenclaw: {
                shield: RavenclawShield,
                barColor: "blue",
            },
            Hufflepuff: {
                shield: HufflepuffShield,
                barColor: "yellow",
            },
        },

        

            this.state = {

                redirect: false,
                
                fightTime : {
                    minutes: 2,
                    seconds: 0,
                },

                //Instructions Screen
                displayInstr: false,
                keyInstr: 66,
                turn: 1,


                //Avatar 1
                progress: 100,
                leftavatar: 5,
                topavatar: 5,
                heightavatar: 130,
                widthavatar: 130,
                borderradius: 50,
                scoreFighter1: 0,



                //Avatar 2
                progress1: 100,

                righttavatar1: 5,
                topavatar1: 5,
                heightavatar1: 130,
                widthavatar1: 130,
                borderradius1: 50,
                scoreFighter2: 0,

                //turn:this.props.turn,

                fighter1: {
                    id: "fighter1",
                    spellCasted: false,
                    rotation: 0,
                    facesRight: true,
                    top: 250,
                    left: 100,
                    life: 100,
                    width: 250,
                    height: 200,
                    attack: "w",      // Attaque: w
                    defend: "q",    // Défense: q
                    rotate: "a",     // Rotate: a
                    moveUp: "e",         // Up: e
                    moveDown: "d",      // Down: d
                    moveLeft: "s",        // Left: s
                    moveRight: "f",       // Right: f
                    house: "Slytherin",
                    //house: this.props.fightersHouse[0],
                    //house:this.getCurrentFighters()[0],
                    castSpell: this.castSpell,
                    move: this.move,
                    rotateFighter: this.rotate,
                    takeOutShield: this.takeOutShield,
                    defense: {
                        shieldOn: false,
                        shieldNumber: 3,
                        shieldTime: 3000,
                    }
                },
                fighter2: {
                    id: "fighter2",
                    spellCasted: false,
                    rotation: 180,
                    facesRight: false,
                    top: 250,
                    left: 1100,
                    life: 100,
                    width: 250,
                    height: 200,
                    attack: "!",                 // Attaque: ! 
                    defend: "m",               // Défense: m
                    rotate: "p",                // Rotate: p
                    moveUp: "ArrowUp",                 // Up: Flèche du haut
                    moveDown: "ArrowDown",               // Down: Flèche du bas
                    moveLeft: "ArrowLeft",               // Left: Flèche de gauche
                    moveRight: "ArrowRight",              // Right: Flèche de droite
                    house: "Gryffindor",
                    allCharacteristics: this.fighterAndSpellCallback,
                    castSpell: this.castSpell,
                    move: this.move,
                    rotateFighter: this.rotate,
                    takeOutShield: this.takeOutShield,
                    defense: {
                        shieldOn: false,
                        shieldNumber: 3,
                        shieldTime: 3000,
                    }
                },
                spellfighter1: {
                    left: 0,
                    top: 0,
                    height: 20,
                    width: 20,
                    direction: 10,
                    id: "",
                },
                spellfighter2: {
                    left: 0,
                    top: 0,
                    height: 20,
                    width: 20,
                    direction: -1,
                    id: "",
                },
                modalVictory: false,

                ///////////PLAYERS
                scoreFighters: {
                    Gryffindor: 0,
                    Slytherin: 0,
                    Ravenclaw: 0,
                    Hufflepuff: 0,
                },


            }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }



    progressBar = (progress) => {
        return <div className="progressbar">
            <div className="progress" style={{
                width: progress + '%',
                backgroundColor: this.houseStyles[this.state.fighter1.house].barColor
            }}>
            </div>
        </div>
    }

    progressBar1 = (progress1) => {
        return <div className="progressbar1">
            <div className="progress1" style={{
                //width: `${progress1}%`,
                width: progress1 + '%',
                backgroundColor: this.houseStyles[this.state.fighter2.house].barColor
            }}>
            </div>
        </div>
    }


    castSpell = (fighterID, facesRight) => {
        let spellID = "spell" + fighterID
        let x = facesRight ? 260 : -30;
        // Apparition du spell
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                spellCasted: true,
            }
        })
        this.setState({
            [spellID]: {
                ...this.state[spellID],
                left: this.state[fighterID].left + x,
                top: this.state[fighterID].top + 80,
                direction: x / Math.abs(x)
            }
        })
        // Spell movement
        let spellIntervall = setInterval(() => {
            this.setState({
                [spellID]: {
                    ...this.state[spellID],
                    left: this.state[spellID].left + 10 * this.state[spellID].direction,
                }
            })
        }, 10)
        // Destruction of spell
        setTimeout(
            function () {
                clearInterval(spellIntervall);
                this.setState({
                    [fighterID]: {
                        ...this.state[fighterID],
                        spellCasted: false,
                    }
                });
            }
                .bind(this),
            3000
        );
        this.props.soundEffect.soundsMusic.play();
        this.props.soundEffect.soundsMusic.volume = this.props.soundEffect.soundsMusic.volume;
    }

    move = (fighterID, x, y) => {
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                top: this.state[fighterID].top + x,
                left: this.state[fighterID].left + y,
            }
        })
    }

    rotate = (fighterID) => {
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                rotation: this.state[fighterID].rotation - 180,
                facesRight: !this.state[fighterID].facesRight,
            }
        })
    }

    // Wizard shield function
    takeOutShield = (fighterID) => {
        //console.log([fighterID]+" take out shield")
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                defense: {
                    ...this.state[fighterID].defense,
                    shieldOn: true,
                    shieldNumber: this.state[fighterID].defense.shieldNumber - 1,
                },
            }
        })
        setTimeout(
            function () {
                this.setState({
                    [fighterID]: {
                        ...this.state[fighterID],
                        defense: {
                            ...this.state[fighterID].defense,
                            shieldOn: false,
                        },
                    }
                })
            }
                .bind(this),
            this.state[fighterID].defense.shieldTime
        );
        this.shieldSound.play()
    }

    hasCollision(object1, object2) {
        if (this.state.modalVictory === false)
            if (object1.top < object2.top + object2.width &&
                object1.top + object1.width > object2.top &&
                object1.left < object2.left + object2.height &&
                object1.height + object1.left > object2.left) {
                return true
            }
            else {
                return false
            };
    };


    //Instructions Screen>>>>>>>>>>>>>>>>>>
    handleKeyPress(event) {
        if (event.key === " ") {
            this.Instr()
        }
    }
    Instr = () => {
        this.setState({ displayInstr: !this.state.displayInstr })
    }

    //Fonction fin du tournoi de putain qui sert à rien pour le moment
    EndOfTurn = () => {
        this.getCurrentFighters(1)
        if (this.state.turn === 3) {
            this.setState({ displayInstr: !this.state.displayInstr })
            console.log("reveille toi connard !!")
        }
    }


    // Fighters selection depending on turn and number of players
    getCurrentFighters = (turn) => {
        //   console.log("turn : " + turn);
        let i = 0;
        let j = 1;

        switch (this.props.fightersHouse.length) {
            case 3:
                switch (turn) {
                    case 1: { i = 0; j = 1 }; break;
                    case 2: { i = 1; j = 2 }; break;
                    case 3: { i = 0; j = 2 }; break;
                };

                break;
            case 4:
                switch (turn) {
                    case 1: { i = 0; j = 1 }; break;
                    case 2: { i = 2; j = 3 }; break;
                    case 3: { i = 0; j = 2 }; break;
                    case 4: { i = 1; j = 3 }; break;
                    case 5: { i = 0; j = 3 }; break;
                    case 6: { i = 1; j = 2 }; break;
                    //case 7: { this.setState({ redirect: !this.state.redirect}) }; break;
                };

                break;
            //default: { i = 0; j = 1 }; break;
        }
        if (this.state.turn === 3) {
            //<Link to="/TournementVictory"></Link>
            // this.setState({ displayInstr: !this.state.displayInstr })
            console.log("reveille toi connard !!")
        }
        // console.log("Fighters selected : ")
        // console.log([this.props.fightersHouse[i], this.props.fightersHouse[j]])

        this.setState({
            fighter1: {
                ...this.state.fighter1,
                life: 100,
                left : 100,
                top: 250,
                house: this.props.fightersHouse[i],
                style: {
                    opacity: 1,
                },
                defense: {
                    shieldTime:3000,
                    shieldOn: false,
                    shieldNumber: 3,
                }
            },
            fighter2: {
                ...this.state.fighter2,
                life: 100,
                left : 1100,
                top: 250,
                house: this.props.fightersHouse[j],
                style: {
                    opacity: 1,
                },
                defense: {
                    shieldTime:3000,
                    shieldOn: false,
                    shieldNumber: 3,
                }
            },
            spellfighter1: {
                ...this.state.spellfighter1,
                id: "spell" + this.props.fightersHouse[i],
            },
            spellfighter2: {
                ...this.state.spellfighter2,
                id: "spell" + this.props.fightersHouse[j],
            },
            progress: 100,
            progress1: 100,
            modalVictory: false,
            turn: turn,
            //Initialisation des scoreFighter à 0
            scoreFighter1: 0,
            scoreFighter2: 0,
            fightTime : {
                minutes: 2,
                seconds: 0,
            },
        })

        //  console.log(this.state.fighter1)
    }


    componentDidMount = () => {

        this.getCurrentFighters(1);
        setInterval(() => {
            let currentState1 = this.state.progress;
            let currentState2 = this.state.progress1;

            // Collision detection between a spell and a shield
            if (this.state.fighter1.defense.shieldOn) {
                if (this.hasCollision(this.state.spellfighter2, this.state.fighter1)) {
                    this.hitsShield("spellfighter2", "fighter2");
                }
            }
            if (this.state.fighter2.defense.shieldOn) {
                if (this.hasCollision(this.state.spellfighter1, this.state.fighter2)) {
                    this.hitsShield("spellfighter1", "fighter1");
                }
            }

            if (this.hasCollision(this.state.spellfighter1, this.state.fighter2)) {
                //window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
                //this.loseLife(fighter2.id)
                this.setState({
                    progress1: currentState2 - 20,
                    fighter1: {
                        ...this.state.fighter1,
                        spellCasted: false,
                    },
                    spellfighter1: {
                        ...this.state.spellfighter1,
                        top: 0,
                        left: 0,
                    }
                })

                ////JE PENSE QUON  PEUT LE VIRER
                //this.deathOfAPlayer(fighter2.id)
                if (this.state.progress === 0) {
                    this.setState({
                        scoreFighter2: this.state.scoreFighter2 + currentState2,
                        progress: -1,
                        modalVictory: true,
                    });


                    switch (this.state.fighter2.house) {
                        case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter2; break;
                        case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter2; break;
                        case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter2; break;
                        case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter2; break;
                    }
                }


                if (this.state.progress1 === 0) {
                    this.setState({
                        scoreFighter1: this.state.scoreFighter1 + currentState1,
                        progress1: - 1,
                        modalVictory: true,
                    });



                    switch (this.state.fighter1.house) {
                        case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter1; break;
                        case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter1; break;
                        case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter1; break;
                        case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter1; break;
                    }

                }
            }
            if (this.hasCollision(this.state.spellfighter2, this.state.fighter1)) {
                //this.loseLife(fighter1.id)
                //window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
                this.setState({
                    progress: currentState1 - 20,

                    fighter2: {
                        ...this.state.fighter2,
                        spellCasted: false,
                    },
                    spellfighter2: {
                        ...this.state.spellfighter2,
                        top: 0,
                        left: 0,
                    }
                })

                //this.deathOfAPlayer(fighter1.id)
                if (this.state.progress === 0) {
                    this.setState({
                        scoreFighter2: this.state.scoreFighter2 + currentState2,
                        progress: - 1,
                        modalVictory: true,

                    });
                    switch (this.state.fighter2.house) {

                        case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter2; break;
                        case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter2; break;
                        case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter2; break;
                        case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter2; break
                    }
                }
                if (this.state.progress1 === 0) {
                    this.setState({
                        scoreFighter1: this.state.scoreFighter1 + currentState1,
                        progress1: - 1,
                        modalVictory: true
                    });
                    switch (this.state.fighter1.house) {
                        case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter1; break;
                        case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter1; break;
                        case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter1; break;
                        case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter1; break;
                    }
                }
            }
        }, 10)
        document.addEventListener("keydown", this.handleKeyPress)

    }

    //loseLife(fighterID){}

    addScores = () => {
        switch (this.state.fighter1.house) {
            case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter1; break;
            case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter1; break;
            case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter1; break;
            case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter1; break;
        }
        switch (this.state.fighter2.house) {
            case "Gryffindor": this.state.scoreFighters.Gryffindor += this.state.scoreFighter2; break;
            case "Slytherin": this.state.scoreFighters.Slytherin += this.state.scoreFighter2; break;
            case "Ravenclaw": this.state.scoreFighters.Ravenclaw += this.state.scoreFighter2; break;
            case "Hufflepuff": this.state.scoreFighters.Hufflepuff += this.state.scoreFighter2; break;
        }
    }

    endOfFight = () => {
        console.log(this.state.progress)
        console.log(this.state.progress1)
        this.setState({
            scoreFighter1: this.state.scoreFighter1 + this.state.progress,
            scoreFighter2: this.state.scoreFighter2 + this.state.progress1,
            progress1: - 1,
            modalVictory: true
        });
        this.addScores()
    }

    // Consequence of a shield being hitten
    hitsShield(spellID, fighterID) {
        console.log("Passage dans hitsShield")
        this.setState({
            [spellID]: {
                ...this.state[spellID],
                left: 0,
                top: 0,
            },
            [fighterID]: {
                ...this.state[fighterID],
                spellCasted: false,
            }

        })
        console.log(this.state[spellID])
        console.log(this.state[fighterID])
    }

    restartFight = () => {
        //console.log("restart fight before setState")
        this.reIntitialize(this.state.fighter1.id, 100, true);
        this.reIntitialize(this.state.fighter2.id, 1100, false);
        this.setState({
            progress: 100,
            progress1: 100,
            modalVictory: false,
            fightTime : {
                minutes: 2,
                seconds: 0,
            },
        })
    }

    reIntitialize = (fighterID, leftPosition, newFacePosition) => {
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                life: 100,
                spellCasted: false,
                top: 250,
                left: leftPosition,
                facesRight: newFacePosition,
                defense: {
                    shieldOn: false,
                    shieldNumber: 3,
                    shieldTime: 3000,
                }
            },
        })
    }

    nextFight = (turn) => {
        this.getCurrentFighters(turn);
    }

    redirect =()=> {
    if (this.state.modalVictory === true && this.state.turn === 3 && this.props.fightersHouse.length === 3) {
        this.props.endTournament(this.state.scoreFighters)
        this.addScores()
        return <Redirect to='/TournementVictory' />
    }
    if (this.state.modalVictory === true && this.state.turn === 6 && this.props.fightersHouse.length === 4) {
        this.props.endTournament(this.state.scoreFighters)
        this.addScores()
        return <Redirect to='/TournementVictory' />
    }
}


    //redirect = () => this.state.redirect ? <Redirect to='/TournementVictory' /> : ""
    render() {
        const { redirect } = this.state;
        if (redirect) {
            console.log('ça marche')
            return <Redirect to='/TournementVictory' />;
        }

        let avatarStyle = {
            position: "absolute",
            top: this.state.topavatar + "px",
            left: this.state.leftavatar + "px",
            width: this.state.widthavatar + "px",
            height: this.state.heightavatar + "px",
            backgroundImage: `url(${this.houseStyles[this.state.fighter1.house].shield})`,
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }

        let avatarId = "avatar" + this.props.house

        let avatarStyle1 = {
            position: "absolute",
            top: this.state.topavatar1 + "px",
            right: this.state.righttavatar1 + "px",
            width: this.state.widthavatar1 + "px",
            height: this.state.heightavatar1 + "px",
            backgroundImage: `url(${this.houseStyles[this.state.fighter2.house].shield})`,
            backgrounPosition: "left",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }
        let avatarId1 = "avatar" + this.props.house

        let instrStyle = {
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: 150 + "px",
            margin: "auto",
            border: 5 + "px" + " " + "solid" + " " + "black",
            lineHeight: 2 + "px",
            opacity: 0.5
        }

        let gri = 'Gryffindor: ' + this.state.scoreFighters.Gryffindor
        let sly = 'Slytherin: ' + this.state.scoreFighters.Slytherin
        let rav = 'Ravenclaw: ' + this.state.scoreFighters.Ravenclaw
        let huf = 'Hufflepuff: ' + this.state.scoreFighters.Hufflepuff



        let grifStyle = {
            backgroundColor: "red"
        }

        let sylStyle = {
            backgroundColor: "green"
        }

        let ravStyle = {
            backgroundColor: "blue"
        }

        let hufStyle = {
            backgroundColor: "yellow"
        }

        return (

            <div>
                <div>
                    <Wall />
                </div>
                <div id="bodyFight">
                    <div className="full">
                       {this.redirect()}
                        <Header
                            fighter1={this.state.fighter1}
                            fighter2={this.state.fighter2}
                            fightTime={this.state.fightTime}
                            endOfFight={this.endOfFight}
                        />
                        <div className="avatar" id={avatarId} style={avatarStyle}></div>
                        {this.progressBar(this.state.progress)}

                        <div className="avatar1" id={avatarId1} style={avatarStyle1}></div>
                        {this.progressBar1(this.state.progress1)}
                    </div>
                    <div>
                        <Fighter                // Player#1
                            fighter={this.state.fighter1}
                            victory={this.state.modalVictory}
                        />
                    </div>
                    <div>
                        <Fighter                // Player#2
                            fighter={this.state.fighter2}
                            victory={this.state.modalVictory}
                        />
                    </div>
                    <div>{
                        this.state.fighter1.spellCasted ?
                            <Spell
                                spell={this.state.spellfighter1}
                            />
                            :
                            <div></div>
                    }</div>
                    <div>{
                        this.state.fighter2.spellCasted ?
                            <Spell
                                spell={this.state.spellfighter2}
                            />
                            :
                            <div></div>
                    }</div>
                    <div>{
                        this.state.fighter1.defense.shieldOn ?
                            <Shield
                                fighter={this.state.fighter1}
                            />
                            :
                            <div></div>
                    }</div>
                    <div>{
                        this.state.fighter2.defense.shieldOn ?
                            <Shield
                                fighter={this.state.fighter2}
                            />
                            :
                            <div></div>
                    }</div>

                    <div>
                        <div className="spaceInstr" style={instrStyle}>
                            <p>INSTRUCTIONS</p>
                            <p>Press SPACEBAR</p>
                        </div>{
                            this.state.displayInstr ?
                                <Instructions />
                                :
                                <div></div>
                        }
                    </div>

                    <div>
                        <div className="score">
                            {/* <h2 className="scorePerso" style={grifStyle}>{ordered}</h2> */}
                            <h3 className="scorePerso" style={grifStyle}>{gri}</h3>
                            <h3 className="scorePerso" style={sylStyle}>{sly}</h3>
                            <h3 className="scorePerso" style={hufStyle}>{huf}</h3>
                            <h3 className="scorePerso" style={ravStyle}>{rav}</h3>


                        </div>{
                            this.state.modalVictory ?
                                <VictoryMessage
                                    getCurrentFighters={this.getCurrentFighters}
                                    turn={this.state.turn}
                                    getCurrentFighter={this.getCurrentFighters}
                                    turn={this.state.turn}
                                    nextFight={this.nextFight}
                                    restartFight={this.restartFight}
                                    gameType = {this.props.gameType}
                                />
                                :
                                <div></div>
                        }</div>


                </div>

            </div>
        );
    }
}

export default Fight;