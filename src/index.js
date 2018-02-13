import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { reducer as authReducer } from './modules/auth';
import { reducer as mainReducer } from './modules/main';
import { reducer as chatReducer } from './modules/chat';
import { reducer as roomsReducer } from './modules/rooms';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appReducer = combineReducers({
    auth: authReducer,
    main: mainReducer,
    chat: chatReducer,
    rooms: roomsReducer
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
