import React, { Component } from 'react';
import './App.css';
import Film from './component/Film';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Film Préféré</h1>
        <Film/>
      </div>
    );
  }
}

export default App;