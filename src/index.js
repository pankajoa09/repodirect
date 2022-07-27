import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="*" element={<h1 style={{textAlign:'center'}}>Page Not Found</h1>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

