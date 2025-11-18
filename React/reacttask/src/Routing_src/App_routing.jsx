
/*
What is React Router?
React Router is a library that provides routing capabilities for React applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. I
t enables you to:

Create multiple pages in your single-page application
Handle URL parameters and query strings
Manage browser history and navigation
Create nested routes and layouts
Implement protected routes for authentication
Without a router, your React application would be limited to a single page with no way to navigate between different views.

npm install react-router-dom


Basic Routing
React Router uses three main components for basic routing:

BrowserRouter, Routes, Route, Link

Link: Creates navigation links that update the URL
Routes: A container for all your route definitions
Route: Defines a mapping between a URL path and a component


The NavLink is especially useful for:

Navigation menus
Breadcrumbs
Tabs

*/


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import About from './pages/About'
import Contact from './pages/Contact'


function App_routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<><AHeader/><Home/><AFooter/></>}></Route>
            <Route path="/about" element={<><AHeader/><About/><AFooter/></>}></Route>
            <Route path="/contact" element={<><AHeader/><Contact/><AFooter/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App_routing