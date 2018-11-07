import React, { Component } from 'react';
import './App.css';
import WelcomePage from './Components/WelcomePage';
import ScanPage from './Components/ScanPage';
import CommunityMembers from './Components/CommunityMembers';
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
