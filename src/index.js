import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import CardComposer from './components/CardComposer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="home" element={<><CardComposer/><Footer/></>}/>
    </Routes>
    </BrowserRouter>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
