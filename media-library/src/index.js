import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
// import styles from './bootstrap.css';
// We require the routes and render to the DOM using ReactDOM API
const store=configureStore()
ReactDOM.render(
    <Provider store={store}>
     <Router history={browserHistory} routes={routes} />
    </Provider>,document.getElementById('root')
);
// 逗号引发的血案。。