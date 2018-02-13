import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { firebase } from 'firebase';

import { reducer as authReducer } from './modules/auth';
import { reducer as mainReducer } from './modules/main';
import { reducer as chatReducer } from './modules/chat';
import { reducer as roomsReducer } from './modules/rooms';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBEcsJrTE3zQX9KWI4ludSzKUwm7X0n904",
    authDomain: "dafs-59108.firebaseapp.com",
    databaseURL: "https://dafs-59108.firebaseio.com",
    projectId: "dafs-59108",
    storageBucket: "dafs-59108.appspot.com",
    messagingSenderId: "898840147930"
  });
const appReducer = combineReducers({
    auth: authReducer,
    main: mainReducer,
    chat: chatReducer,
    rooms: roomsReducer
})

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
