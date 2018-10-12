import React, { Component } from "react"
import './Instructions.css'



class Instructions extends Component {
    render() {


        return (
            <div>
                <div className="keyboardLayout" >

                    <div className="container">
                        <div className="image1"></div>
                        <div className="image2"></div>
                    </div>
                    <div className="container2">
                        <table>
                            <tr>
                                <th></th>
                                <td>F</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>D</td>
                                <td>F</td>
                            </tr>
                        </table>
                        <span>MOVE</span>
                        <table>
                            <tr>
                                <th></th>
                                <th>↑</th>
                            </tr>
                            <tr>
                                <td>←</td>
                                <td>↓</td>
                                <td>→</td>
                            </tr>
                        </table>
                    </div>
                    <div className="container3">
                        <p>A</p>
                        <span>ROTATE</span>
                        <p>P</p>
                    </div>
                    <div className="container4">
                        <p>W</p>
                        <span>SPELL</span>
                        <p>!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Instructions