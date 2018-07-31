import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './Actions/courseActions';
import {loadAuthors} from './Actions/authorActions';
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render
(
    <Provider store = {store}>
        <BrowserRouter>           
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
