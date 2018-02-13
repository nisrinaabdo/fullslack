import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import { reducer as authReducer } from './modules/auth';
import { reducer as mainReducer } from './modules/main';
import { reducer as chatReducer } from './modules/chat';
import { reducer as roomsReducer } from './modules/rooms';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebaseConfig from  './firebase-config.json';

const app = firebase.initializeApp(firebaseConfig);
const appReducer = combineReducers({
    auth: authReducer,
    main: mainReducer,
    chat: chatReducer,
    rooms: roomsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
