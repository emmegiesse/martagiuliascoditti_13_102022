// import REACT
import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// import REDUX
import { Provider } from 'react-redux';
// import STORE
import { store } from './redux/store.js';

// import COMPOSANTS
import App from './app/App';

// import STYLE
import './style/appStyle.css';

import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();