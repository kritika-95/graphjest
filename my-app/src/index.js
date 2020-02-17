import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import ReactTest from './reacttest';
import TodoList from './Todolist';
//import App from './Screen';



import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ReactTest />, document.getElementById('root'));
ReactDOM.render(<TodoList />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
