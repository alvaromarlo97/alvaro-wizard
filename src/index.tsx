import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import FirstPage from './pages/First-Page/First-Page';
import SecondPage from './pages/Second-Page/Second-Page';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <SecondPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
