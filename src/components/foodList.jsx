import React, { Component } from "react";

class FoodList extends Component {

  render() {
    const { foods, diceNumber } = this.props;
    return (
      <div className="mb-3">
        {foods.map((food, idx) => {
          let targetClassName = 'food-item';
          if (diceNumber === idx)
            targetClassName += ' food-item-chose';
          return (
            <div className={targetClassName} key={idx}>
              <span>{food.emoji}</span>
              {food.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default FoodList;