import React, { Component } from 'react'
import Ball from './components/Ball/Ball'
import './App.css'

class App extends Component {

  state = {
    balls: [
      { ballNumber: 1, classColor: 'blue-ball'},
      { ballNumber: 7, classColor: 'dark-blue-ball'},
      { ballNumber: 13, classColor: 'green-ball'},
      { ballNumber: 19, classColor: 'orange-ball' },
      { ballNumber: 31, classColor: 'red-ball' }
    ]
  }

  changeBalls = () => {
    const copyState = { ...this.state };
    copyState.balls = this.createNewBalls();
    this.setState(copyState);
  };

  setClassColorForNumber = (number) => {
    switch (true) {
      case number <= 6:
        return 'blue-ball';
      case number <= 12:
        return 'dark-blue-ball';
      case number <= 18:
        return 'green-ball';
      case number <= 24:
        return 'orange-ball';
      case number <= 30:
        return 'red-ball';
      default:
        return 'violet-ball';
    };
  };

  createNewBalls = () => {
    let row = this.generateBallsRow();
    const balls = [];
    for (let i = 0; i < row.length; i++) {
      let classColor = this.setClassColorForNumber(row[i]);
      balls.push({ ballNumber: row[i], classColor: classColor});
    };
    return balls;
  };

  generateBallsRow = () => {
    let array = [];
    while (array.length < 5) {
      let number = Math.floor(Math.random() * 36) + 1;
      if (array.indexOf(number) === -1) array.push(number);
    }
    return array.sort((a, b) => a - b);
  };

  render() {
    let pageItems = this.state.balls.map((ball, index) => {
      return <Ball key={index} ballNumber={ball.ballNumber} classColor={ball.classColor} />
    });
    return (
      <div className="background flex-column">
        <div className="balls-row">
          {pageItems}
        </div>
        <button className="button" onClick={this.changeBalls}>New numbers</button>
      </div>
    );
  };
};

export default App;