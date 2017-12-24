import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar/>
        </div>
        <header className="App-header">
            <header className="App-title">Popular Tags</header>
            <header className="popTagSubtitle">Find out what <i className="textColorPink">#hashtags</i> are currently trending.</header>
        </header>

        <div>
            <SearchBar/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
