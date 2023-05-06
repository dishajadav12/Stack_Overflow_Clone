
import React, { useState, useRef } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import './ChatBot.css';
import icon from '../../assets/favicon-32x32.png'
import OPENAI_API_KEY from './chatAPI';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'




const ChatBot = () => {
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: 'Hello, What can I find for you?',
      sender: 'chatGPT',
    },
  ]);
  


const handleSend = async (message) => {
  const newMessage = {
    message: message,
    sender: 'user',
    direction: 'outgoing',
  };
  const newMessages = [...messages, newMessage];
  setMessages(newMessages);

  setTyping(true);
  await processMessageToChatGPT(newMessages);
}
async function processMessageToChatGPT(chatMessages){
  let apiMessages = chatMessages.map((messageObject) => {
    let role = "";
    if (messageObject.sender === "ChatGPT"){
      role = "assistant";
    } else{
      role = "user";
    }
    return {
      role: role, content: messageObject.message  
    }
  });
  const systemMessage = {
    role: "system",
    content: "Explain all concepts like I am 5 years old."
  }

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages":[
      systemMessage,
      ...apiMessages
    ]
  }
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + OPENAI_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
     }).then((data) =>{
      return data.json();
     }).then((data) =>{
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, 
          { 
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }

        ]
      );
      setTyping(false);

     });
}

  const [isChatWindowVisible, setIsChatWindowVisible] = useState(false);

  const handleChatIconClick = () => {
    setIsChatWindowVisible(prevState => !prevState);
  }

  const otpRef = useRef(null);
  const mobileRef = useRef(null);
  const chatGptRef = useRef(null);

   
  

  const handleEnter =(e) => {
    e.preventDefault();
    otpRef.current.classList.add('show');
    mobileRef.current.classList.add('hide');

  }
  

  const handleSubmit = () => {
    chatGptRef.current.classList.add('show');
    otpRef.current.classList.remove('show');


  }

  return (
    <div className='chat-container'>
      {/* chatbot icon */}
      <button className='chat-icon' onClick={handleChatIconClick}>
        <FontAwesomeIcon icon={faMessage}/>
      </button>

     
      <div className={`chat-window ${isChatWindowVisible ? 'show' : 'hide'}`}>


      {/* chatbot mobile number input */}
        <div   ref={mobileRef} className='chat-window-container'>
        <div className='chat-intro-container' >
                 <p className='welcome-label-1'> Hello! welcome to StackOverflow.</p>
                  <p className='welcome-label-2'> Find your answers here! </p> 
            </div>
          <div className='main-container-auth'>
            <img src={icon} className='stack-overflow-logo' alt="stackOverflow_logo" />
              <h3 className='stack-overflow-title'> StackOverflow Assistent</h3>
                <form onSubmit={handleEnter}>
                  <div id='sign-in-button'></div>
                   <p className='form-label'> Verify your number to ask a question.</p> 
                   {/* firebase */}
                  <PhoneInput defaultCountry='IN' placeholder='Enter Phone Number'/>
                  <div id='recaptcha-container'></div>
                <button type='submit' className='auth-btn'>Send OTP</button>
                </form>
               
          </div>
        </div>



      {/* chatbot otp input */}
        <div  className='chat-window' ref={otpRef} >
        <div className='chat-intro-container' >
                 <p className='welcome-label-1'> Hello! welcome to StackOverflow.</p>
                  <p className='welcome-label-2'> Enter Verification Code </p> 
            </div>
          <div className="main-container-auth">
             <h3>Enter OTP</h3>
             <form action="">
             <p className='form-label'> We have sent an OTP on your number</p> 

              <input type="number" required  />
             </form>
             <button className='auth-btn' onClick={handleSubmit}>Verify</button>

          </div>
        </div>
      {/* chatbot chatGPT */}
        <div  className='chat-window' ref={chatGptRef}>  
          <MainContainer>
            <ChatContainer>
              <MessageList typingIndicator={typing ? <TypingIndicator content="Typing" />: null }>
                {messages.map((message, i) => {
                  return <Message key={i} model={message}/>
                })}
              </MessageList>
              <MessageInput placeholder='Type message here' onSend={handleSend} className='message-container'/>
            </ChatContainer>
          </MainContainer>
        </div>
        </div>
    </div>
  );
}

export default ChatBot
