import React, { Component } from 'react'

export default class QuizComponent  extends Component {
    render() {
        return (
        <div>
            <div className="question">
                <h1>Questions</h1>
                <h3>Which is the only mammal that can't jump?</h3>
                <div className="options">
                    <button className="opt">Dog</button>
                    <button className="opt">Goat</button>
                    <button className="opt">Elephant</button>
                    <button className="opt">Lion</button>
                </div>
                <div className="btns">
                    <button className="previous">Previous</button>
                    <button className="next">Next</button>
                    <button className="quit">Quit</button>
                </div>
            </div>
        </div>
        );
    }
}