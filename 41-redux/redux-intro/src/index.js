import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

let store = createStore(reducer);
// createStore is built in from redux

// store.getState      =====> READ 
// store.dispatch      =====> UPDATE / WRITING


// console.log(store)
// console.log(store.getState())
// console.log(store.dispatch({type: 'LIKE'}))
// console.log(store.getState())
// console.log(store.dispatch({type: 'CHANGE_TEXT', payload: 'heres my new text'}))
// console.log(store.getState())

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
    document.getElementById('root'));
