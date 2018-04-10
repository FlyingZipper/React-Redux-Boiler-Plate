import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';


class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      );
    }
}

const store = createStore(rootReducer)

ReactDOM.render(
    <App />
, document.getElementById('root'));
