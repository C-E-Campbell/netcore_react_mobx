import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { values: [] };

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((res) => {
      this.setState({
        values: res.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.values.map((value: any) => {
          return <li key={value.id}>{value.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
