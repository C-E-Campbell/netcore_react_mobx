import React, { Component } from 'react';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
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
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>

          <List>
            {this.state.values.map((value: any) => {
              return <List.Item key={value.id}>{value.name}</List.Item>;
            })}
          </List>
        </Header>
      </div>
    );
  }
}

export default App;
