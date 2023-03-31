import React, { useState, useRef } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import './ChatBot.css';

const API_KEY = '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';

const ChatBot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I am chatGPT',
      sender: 'chatGPT',
    },
  ]);

  const chatWindowRef = useRef(null);

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
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return {
        role: role,
        content: messageObject.message,
      };
    });

    const systemMessage = {
      role: 'system',
      content: 'Explain all concepts like I am 5 years old.',
    };

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages],
    };
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ]);
        setTyping(false);
      });
  }

  const handleChatIconClick = () => {
    chatWindowRef.current.classList.toggle('show');
  };

  
  return (
    <div className='chat-container'>
 
      <button className='chat-icon' onClick={handleChatIconClick}><FontAwesomeIcon icon={faMessage}/></button>
      <div style={{ position: "relative"}} className='chat-window' ref={chatWindowRef}>  
          <MainContainer className='main-container'>
            <ChatContainer>
              <MessageList typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" />: null }>
                  {messages.map((message, i) => {
                    return <Message key={i} model={message}/>
                  })
                  }
              </MessageList>
              <MessageInput placeholder='Type message here' onSend={handleSend} className='message-container'/>
            </ChatContainer>
          </MainContainer>

        </div>
    </div>
  )
}

export default ChatBot