import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div>
                <div className="resultpage">
                    <h1>Result</h1>
                    <div className="result">
                        <h2>You need more practice!</h2>
                        <h2>Your Score: 20%</h2>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>Total number of questions</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Number of attempted questions</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Number of correct answers</td>
                                <td>3</td>
                            </tr>
                                <tr>
                                <td>Number of wrong` answers</td>
                                <td>6</td>
                            </tr>
                        </table>
                    </div>
                </div>
            <div className="btnss">
                <button className="playagainbtn">Play Again</button>
                <button className="backbtn">Back to Home</button>
            </div>
        </div>
        )
    }
}
