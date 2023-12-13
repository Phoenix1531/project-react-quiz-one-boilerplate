import React, { Component } from "react";

export default class Result extends Component {

  render() {
    return (
      <div className="container three">
        <h1 className="result">Result</h1>
        <div className="small-box">
            <h3>You need more practice!</h3>
            <h1 className="score">Your score is 20%</h1>
            <div className="ana">
                <div className="point">
                    <h4>Total number of questions</h4>
                    <h4>15</h4>
                </div>
                <div className="point">
                    <h4>Number of attempted questions</h4>
                    <h4>9</h4>
                </div>
                <div className="point">
                    <h4>Number of correct answers</h4>
                    <h4>3</h4>
                </div>
                <div className="point">
                    <h4>Number of wrong answers</h4>
                    <h4>6</h4>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button id="btn-1">Play again</button>
            <button id="btn-2">Back to Home</button>
        </div>
      </div>
    );
  }
}