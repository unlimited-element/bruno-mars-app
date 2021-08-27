import React from 'react'
import Home from '../src/components/home';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// , Switch, Route
const App = () => {

  return (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  )
}
export default App