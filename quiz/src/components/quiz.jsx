import React, { Component } from "react";

export default class Quiz extends Component {

  render() {
    return (
      <div className="container two">
        <div className="big-box">
            <h1>Question</h1>
            <p className="two-two">1 of 15</p>
            <h4 className="two-three">Which is the only animal that can't jump?</h4>
            <div className="options">
                <button className="opt">Dog</button>
                <button className="opt">Elephant</button>
            </div>
            <div className="options">
                <button className="opt">Goat</button>
                <button className="opt">Lion</button>
            </div>
            <div className="btns">
                <button className="blue">Previous</button>
                <button className="green">Next</button>
                <button className="red">Quit</button>
            </div>
        </div>
      </div>
    );
  }
}