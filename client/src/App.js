import './App.css';
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
