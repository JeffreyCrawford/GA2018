import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitAttendee from './Components/SubmitAttendee'
import RetrieveAttendee from './Components/RetrieveAttendee';

class App extends Component {
  render() {
    return (
      <div>
        <SubmitAttendee />
        <RetrieveAttendee />


      </div>
    );
  }
}

export default App;
