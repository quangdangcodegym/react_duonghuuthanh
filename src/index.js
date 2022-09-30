import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DemoApp1 from './DemoApp1';
import DemoApp2 from './DemoApp2';
import DemoApp1State from './DemoApp1State';
import DemoApp2State from './DemoApp2State';
import DemoApp2Effect from './DemoApp2Effect';
import DemoRouterApp from './DemoRouterApp';
import DemoReducer from './DemoReducer';
import LoginApp from './LoginApp';
let obj = {
  "firstName": "Quang", 
  "lastName": "Dang",
  "country": "VietNam",
  "gender": "Nam",
  "location": "Go Vap"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginApp  {...obj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
