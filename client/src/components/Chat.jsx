
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchChat } from "../actions/chat";
import './Chat.css'

function Chat() {
    const [prompt, setPrompt] = useState("");
    const dispatch = useDispatch();
    // const { chatData, error } = useSelector((state) => state.chat);
    var chatData = useSelector((state) => (state.chatReducer.chatData));
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchChat({ prompt }));
  
    };
  
    return (
      <div className='chat-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="haha">just ask something:</label>
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <button type="submit"> Submit</button>
        </form>
       <p>{chatData}</p> 
      </div>
    );
  }
  
  export default Chat;