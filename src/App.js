import React, { Component } from 'react';
import './App.css';
import Header from './ClientApp/Home/Header';
import Main from './Main';
class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <Main />           
      </div>
    );
  }
}

export default App;