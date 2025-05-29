//IMPORTS TECHNIQUES: REACT et BROWSER ROUTER
//import de React 
import React from 'react';

//import du Browser Router + Routes + Route = 3 éléments
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import des composants
import Header from './components/layout/Header';
//import Footer from '../components/layout/Footer';

//import des pages
import Home from "./pages/Home"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
