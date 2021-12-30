import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/homepage';
import NavBar from './components/nav';
import Cv from './pages/cv';
import Snake from './pages/snakepage';


function App() {
  return(
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          <Route exact path='/cv' element={<Cv /> } />
          <Route exact path='/snake' element={<Snake /> } />
        </Routes>
    </Router>
    </>
  )
}

export default App;

