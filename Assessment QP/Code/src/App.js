import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caloriesConsumed: 0,
      dailyGoal: 2000,
      foodLog: [],
      mealName: "",
      mealCalories: "",
      mealLogged: false,
    };
  }
  handleLogCalories = () => {
    const { mealName, mealCalories } = this.state;
    if (!mealName || !mealCalories) {
      alert("Please enter both meal name and calories!");
      return;
    }
    const calories = parseInt(mealCalories);
    if (isNaN(calories)) {
      alert("Please enter a valid number for calories!");
      return;
    }
    this.setState((prevState) => ({
      caloriesConsumed: prevState.caloriesConsumed + calories,
      foodLog: [
        ...prevState.foodLog,
        { id: Date.now(), name: mealName, calories, timestamp: new Date() },
      ],
      mealName: "",
      mealCalories: "",
      mealLogged: true,
    }));
    setTimeout(() => {
      this.setState({ mealLogged: false });
    }, 3000);
  };
  handleDeleteMeal = (mealId) => {
    this.setState((prevState) => ({
      foodLog: prevState.foodLog.filter((entry) => entry.id !== mealId),
      caloriesConsumed:
        prevState.caloriesConsumed -
        prevState.foodLog.find((entry) => entry.id === mealId).calories,
    }));
  };
  render() {
    const {
      caloriesConsumed,
      dailyGoal,
      foodLog,
      mealName,
      mealCalories,
      mealLogged,
    } = this.state;
    const progress = (caloriesConsumed / dailyGoal) * 100;
    return (
      <div className="App">
        <h1>Calorie Tracker</h1>
        <div className="goal-form">
          <label htmlFor="daily-goal">Set Daily Calorie Goal:</label>
          <input
            type="number"
            id="daily-goal"
            value={dailyGoal}
            onChange={(e) =>
              this.setState({ dailyGoal: parseInt(e.target.value) })
            }
          />
        </div>
        <p>Today's Calorie Intake: {caloriesConsumed} calories</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter meal name"
            value={mealName}
            onChange={(e) => this.setState({ mealName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter calories"
            value={mealCalories}
            onChange={(e) => this.setState({ mealCalories: e.target.value })}
          />
          <br></br>
          <button onClick={this.handleLogCalories}>Log Meal</button>
        </div>
        {mealLogged && (
          <p className="success-message">Meal Logged Successfully!</p>
        )}
        <FoodLog foodLog={foodLog} onDeleteMeal={this.handleDeleteMeal} />
      </div>
    );
  }
}
const FoodLog = ({ foodLog, onDeleteMeal }) => (
  <div>
    <h2>Food Log</h2>
    <ul>
      {foodLog.map((entry, index) => (
        <li key={entry.id}>
          {entry.timestamp.toISOString()} - {entry.name}: {entry.calories}
          calories
          <button onClick={() => onDeleteMeal(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
export default App;
