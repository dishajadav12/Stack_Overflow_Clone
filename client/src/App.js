import React, {useState} from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import AppRoute from './AppRoute';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch()
  useEffect(() =>{
   dispatch(fetchAllQuestions())
   dispatch(fetchAllUsers())
  }, [dispatch])

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("https://stack-overflow-clone-q0za.onrender.com/chat", { prompt })
    .then((res) => {
      setResponse(res.data);
    })
    .catch((Error) => {
      console.log(Error);
    });

  };
  return (
   <>
   <Router>
   <div className='chat-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="haha" >
            just ask something:
          </label>
          <input type="text"  value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          <button type="submit"> Submit</button>
        </form>
        <p>{response}</p>
      </div>
        <Navbar />
        <AppRoute />

        
   </Router>
   </>
  );
}

export default App;

  
