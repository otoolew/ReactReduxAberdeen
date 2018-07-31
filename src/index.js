import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './Actions/courseActions';
import {loadAuthors} from './Actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
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
