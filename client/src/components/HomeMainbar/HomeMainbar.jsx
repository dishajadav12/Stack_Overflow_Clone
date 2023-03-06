import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
  var questionsList = [{
    id:1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "what is a function?",
    questionBody: "It meant to be",
    questionTags: ["java","reactjs","nodejs","mongodb"],
    userPosted:"mano",
    askedOn: "jan 1"
  },{
    
      id:2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript","R","nodejs"],
      userPosted:"mano",
      askedOn: "jan 1"
    
  },
  {
    
    id:3,
    votes: 1,
    noOfAnswers: 0,
    questionTitle: "what is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript","R","nodejs"],
    userPosted:"mano",
    askedOn: "jan 1"
  
}]
      const location= useLocation()
      const user =1;
      let navigate = useNavigate();
  

      const checkAuth =() => {

       if (user === null){
        alert("login or signup to ask a question");
         navigate('/Auth');

       }
       else{
        navigate('/AskQuestion')
       }
      }

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button onClick={checkAuth}  className='ask-btn'>Ask Questions</button>
        </div>
        <div>
          {
            questionsList === null  ?
            <h1>Loading...</h1> :
            <>
                <p>{questionsList.length} questions</p>
                <QuestionsList questionsList={questionsList}/>
            </> 
          }
        </div>
    </div>
  )
}

export default HomeMainbar
