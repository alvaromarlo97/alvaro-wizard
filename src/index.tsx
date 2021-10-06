import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import AgeCheck from './Components/Age-check/Age-check';
// import SecondPage from './pages/Second-Page/Second-Page';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={AgeCheck} />
          <Route path="/login" component={Login} />
        </Switch>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
