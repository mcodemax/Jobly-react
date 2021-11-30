import './App.css';
import JoblyApi from './api';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, NavLink, Link } from 'react-router-dom';
import NavBar from './NavBar';

// prob need to store credentials in state

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <NavBar />
        
        <Routes> {/* replaces <Switch> in v6*/ }
          <Route exact="true" path="/" element={
            <>
             <div>
               <h1>Jobly</h1>
               <p>All the jobs in one, convenient place.</p>
               <p>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
               </p>
             </div>
            </>
          }/>
          <Route exact="true" path="/login" element={
            <>
             {'hi'}
            </>
          }/>
          <Route exact="true" path="/signup" element={
            <>
             {'bye'}
            </>
          }/>
          <Route path="*" element={<Navigate replace to="/" />} />
          {/*
            When no other route matches the URL, you can render a "not found"
            route using path="*". This route will match any URL, but
            will have the weakest precedence so the router will only pick it
            if no other routes match.
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
