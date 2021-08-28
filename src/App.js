import React from 'react'
// import Home from '../src/components/home';
import Auth from '../src/components/auth';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// , Switch, Route
const App = () => {

  return (
  <BrowserRouter>
    <Auth />
  </BrowserRouter>
  )
}
export default App