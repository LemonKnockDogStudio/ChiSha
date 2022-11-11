import React, { Component } from "react";
import FoodList from "./components/foodList";

import getFoods from "./fakedata";

class App extends Component {

  state = {
    foods: getFoods(),
    diceNumber: null,
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  handleDice = () => {
    const total = this.state.foods.length;
    const randomIdx = this.randomIntFromInterval(0, total-1);
    this.setState({diceNumber: randomIdx});
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          不知道吃啥
        </nav>
        <main className="container">
          <FoodList
            diceNumber={this.state.diceNumber}
            foods={this.state.foods}
          />
          <button
            onClick={this.handleDice}
            className="btn-start"
          >
            <span className="btn-start-dice">🎲</span>
            吃！
          </button>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
