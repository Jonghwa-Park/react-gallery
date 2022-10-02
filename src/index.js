import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger/src'
import thunk from "redux-thunk";


const logger = createLogger()
const middleware = [thunk, logger]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
