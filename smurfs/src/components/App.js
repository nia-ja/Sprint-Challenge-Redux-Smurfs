import React, { Component } from 'react';

import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Smurfs list</h1>
          <SmurfForm />
        </header>
        <SmurfsList />
      </div>
    );
  }
}

export default App;
