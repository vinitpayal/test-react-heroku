import React, { Component } from 'react';
import './App.css';
import {Button, Icon} from 'react-materialize';

class App extends Component {
  componentDidMount(){
    console.log('component mounted');
  }
  render() {
    return (
      <div className="App">
         <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
      </div>
    );
  }
}

export default App;