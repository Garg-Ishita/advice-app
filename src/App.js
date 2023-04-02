import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvise();
  }

  fetchAdvise = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="app">
        <div className="card">
          <div className="heading">{this.state.advice}</div>
        </div>
        <div class="buttons">
          <button class="btn" onClick={this.fetchAdvise}>
            <span></span>
            <p
              data-start="good luck!"
              data-text="ADVICE!"
              data-title="What More"
            ></p>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
