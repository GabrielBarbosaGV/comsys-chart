import React, { Component } from 'react';
import Graph from './Graph'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <div>
        <Graph data={ this.state.data } datatype='slotCount' />
        <Graph data={ this.state.data } datatype='efficiency' />
        <Graph data={ this.state.data } datatype='emptySlots' />
        <Graph data={ this.state.data } datatype='collisionCount' />
        <Graph data={ this.state.data } datatype='ellapsedTime' />
      </div>
    );
  }

  componentDidMount() {
    var req = new XMLHttpRequest();

    var me = this;

    req.onload = () => {
      console.log('Hey');
      me.setState({
        data: JSON.parse(req.responseText)
      });
    };

    req.open('GET', 'http://localhost:8080', true);
    req.send();
  }
}

export default App;