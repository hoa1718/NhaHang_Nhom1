import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from './App';
import Login from './Login'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} ></Route>
      <Route path="/Login" element={<Login />} ></Route>
    </Routes>
    
  </BrowserRouter>
  <App></App>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
