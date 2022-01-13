import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import HomePage from './pages/homepage';
import NavBar from './components/nav';
import Footer from './components/footer';
import Cv from './pages/cv';
import Snake from './pages/snakepage';
import Website from './pages/website';



// creating pathways for website.
function App() {
  return(
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          <Route exact path='/cv' element={<Cv /> } />
          <Route exact path='/snake' element={<Snake /> } />
          <Route exact path='/website' element={<Website /> } />
        </Routes>
        <Footer />
    </Router>
    </>
    
  )

}

export default App;

