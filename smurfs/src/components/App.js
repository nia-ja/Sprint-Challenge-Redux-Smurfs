import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';
import EditSmurf from './EditSmurf';

import AddIcon from '../img/add-icon.png';

class App extends Component {
  state = {
    show: false
  }
  showAddForm = () => {
    this.setState({show: true});
  } 
  hideForm = () => {
    this.setState({show: false});
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to="/">Smurfs list</Link></h1>
          {this.state.show === false ? <img src={AddIcon} alt="plus sign" className='show-add-form' onClick={this.showAddForm} /> : <SmurfForm hideForm={this.hideForm} />}
        </header>
        <Route exact path='/' component={SmurfsList} />
        <Route path='/edit/:id' component={EditSmurf} />
      </div>
    );
  }
}

export default App;
