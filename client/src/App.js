import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import AppRoute from './AppRoute';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import ChatBot from './components/ChatBot/ChatBot';



function App() {

  const dispatch = useDispatch()
  useEffect(() =>{
   dispatch(fetchAllQuestions())
   dispatch(fetchAllUsers())
  }, [dispatch])


  return (
   <>
   <Router>
       
        <Navbar />
        <AppRoute />
        <ChatBot/>
    </Router>
   </>
  );
}

export default App;

  
