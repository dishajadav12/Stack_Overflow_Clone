import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import AppRoute from './AppRoute';

function App() {
  return (
   <>
   <Router>
        <Navbar />
        <AppRoute />
        
   </Router>
   </>
  );
}

export default App;