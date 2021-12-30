import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/homepage';
import NavBar from './components/nav';
import Mock from './pages/mock';


function App() {
  return(
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
            
          
          <Route exact path='/cv' element={<Mock /> } />
        </Routes>
    </Router>
    </>
  )
}

export default App;

