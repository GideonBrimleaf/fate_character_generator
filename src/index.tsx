import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseCharacterStore } from './models/Character';

const characterStore = new FirebaseCharacterStore(
  {
    devServer: process.env.NODE_ENV === 'production' ? null : 'http://localhost:8080/characters',
  },
);

ReactDOM.render(
  <React.StrictMode>
    <App characterStore={characterStore} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
