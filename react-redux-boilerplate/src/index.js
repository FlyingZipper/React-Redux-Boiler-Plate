import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import Root from './containers/Root'


const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render( <Root store={store} />, root);
