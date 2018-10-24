import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./HomePage.css"

class HomePage extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            popupButtons: false
        }
        this.displayPopups = this.displayPopups.bind(this)
    }

    displayPopups = () => {
        this.setState({
            popupButtons: !this.state.popupButtons
        })
    }

    render() {
        return (

            <div className="container1">

                <h1 className="title1">Potter Fight</h1>

                    <div>
                        <button onClick={() => this.displayPopups()} className="newGame">NEW GAME</button>

                        {
                            this.state.popupButtons ? 
                            <div className="hidden">
                            <Link to="/HouseSelection"><button>1 VS 1</button></Link>
                            <button>TOURNAMENT</button>
                            </div> 
                            : 
                            <div></div>
                        }

                        <button className="settings">SETTINGS</button>
                    </div>
           
            </div>
        )
    }
}

export default HomePage