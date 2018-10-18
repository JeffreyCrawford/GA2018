import React, { Component } from 'react';
import './App.css';
import WelcomePage from './Components/WelcomePage';
import ScanPage from './Components/ScanPage';


/* App renders the Welcome Page Component */
class App extends Component {
  render() {
    return (
      <div>
        <ScanPage />
      </div>
    );
  }
}

export default App;
