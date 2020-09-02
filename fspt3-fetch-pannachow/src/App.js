import React from "react";
import "./App.css";

const apiKey = "bbf87c68f90a1e66db46958092b6740e";

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      location: "",
      weather: null,
      error: false
    };
    this.location = React.createRef();
  }

  async getWeather(event) {
    event.preventDefault();
    // call Open Weather API
    this.setState({
      ...this.state,
      loading: true
    });

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.location.current.value}&APPID=${apiKey}`;
    this.location.current.value = "";

    await pause(1000);
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 4));
    this.setState({
      ...this.state,
      weather: data,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Location
            <br />
            <input ref={this.location} type="text"></input>
          </label>
          <button type="submit" onClick={e => this.getWeather(e)}>
            Submit!
          </button>
        </form>

        {this.state.loading ? <img alt="loading" src="tenor.gif" /> : null}

        {this.state.weather ? (
          <div>
            <p>City: {this.state.weather.name}</p>
            <p>Temperature: {this.state.weather.main.temp}</p>
            <p>Wind: {this.state.weather.wind.speed}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
