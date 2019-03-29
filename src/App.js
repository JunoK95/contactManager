import React, { Component } from 'react';
import Header from './components/Header'
import Contacts from './components/Contacts'
import './App.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className = "App">
          <Header branding = "Contact Manager"/>
          <div className="container">
            <Contacts />
          </div>     
        </div>
      </Provider>
    )
  }
}

export default App;
