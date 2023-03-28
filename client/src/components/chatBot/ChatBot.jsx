import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {chatBot} from '../../actions/chat'

import './ChatBot.css'

const ChatBot = () => {


    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        setResponse(chatBot.data);
        dispatch(chatBot(prompt));
      } catch (error) {
        console.error(error);
      }
    };
      
         
      
  return (
    <div className='chatbot-container'>
    <form onSubmit={handleSubmit} className='chatbot-form'>
      <label htmlFor="chat">Just ask something:</label>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
    <div>
      <p>{response}</p>
    </div>
  </div>  
  )
}

export default ChatBot