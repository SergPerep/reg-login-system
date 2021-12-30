import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        headers: { token: localStorage.getItem("token") }
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, [])
  return (
    <main>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
