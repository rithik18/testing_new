import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Employee from './pages/Employee.jsx'
import Admin from './pages/Admin.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import App from './App.jsx'
import {BrowserRouter,Routes,Route, HashRouter}  from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename='testing_new/'>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/employee" element={<Employee/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />

    </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
