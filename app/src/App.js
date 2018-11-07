import React, { Component } from 'react';
import './App.css';
import ScanBox from './Components/ScanBox';
import Wrapper from './Components/Wrapper'

/* App renders the Welcome Page Component */
class App extends Component {
  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
