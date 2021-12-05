import './App.css';
import JoblyApi from './api';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, NavLink, Link } from 'react-router-dom';
import NavBar from './NavBar';
import UserContext from "./auth/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";

import Login from './Login';
import CompaniesList from './companies/CompaniesList';
import CompanyDetail from './companies/CompanyDetail';

import SignUpForm from './homepage/SignUpForm';

import JobList from './jobs/JobList';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // ^need to store credentials in state
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(username, password) {
    try {
      let token = await JoblyApi.login(username, password);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }


  // might need to make a f() to set the current user

  
  /**
   * How to signUp
   * 
   * 
   * in backend=> /auth/register<= { username, password, firstName, lastName, email }
   * 
   * test:
   * { "username":"Fname1", "password":"passy1", "firstName":"Adam", "lastName":"Ant", "email":"Adam@smolboi.net" }
   * 
   */
  async function signUp(userObj) {
    try {
      console.log('in signup', userObj)
      let token = await JoblyApi.signUp(userObj);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  // make f() to get the curr user

  return (
    <div className="App">
      
      
      <BrowserRouter>
        <UserContext.Provider
            value={{ currentUser }}>
              {/* maybe add value= isLoggedIn or currUser */}
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
            {/* make a loggedin context */}
             <Login login={login}/>
            </>
          }/>
          <Route exact="true" path="/signup" element={
            <>
             <SignUpForm signUp={signUp}/>
            </>
          }/>
          <Route exact="true" path="/companies" element={
             <CompaniesList />
          }/>
          <Route exact="true" path="/jobs" element={
             <JobList />
          }/>
          <Route path="/companies/:companyHandle" element={<CompanyDetail />} />
          <Route path="/jobs/:id" element={<CompanyDetail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          {/*
            When no other route matches the URL, you can render a "not found"
            route using path="*". This route will match any URL, but
            will have the weakest precedence so the router will only pick it
            if no other routes match.
          */}
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
