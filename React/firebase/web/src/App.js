import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import Main from './Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  
  return (
    <div>
      <BrowserRouter>
		    <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
