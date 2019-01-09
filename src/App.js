import React, { Component } from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={askForPermissioToReceiveNotifications} >
          Click for notifications
        </button>
      </div>
    );
  }
}

export default App;
