import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const questionsList = useSelector(state => state.questionsReducer)
  console.log(questionsList)
  console.log(Array.isArray(questionsList.data)); 

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
            location.pathname === '/' ? <h2>Top Questions</h2> : <h2>All Questions</h2>
          }
          <button onClick={checkAuth}  className='ask-btn'>Ask Questions</button>
        </div>
        <div>
          {
            questionsList.data === null  ?
            <h1>Loading...</h1> :
            <>
                <p>{questionsList.data.length} questions</p>
                <QuestionList questionsList={questionsList.data}/>
            </> 
          }
        </div>
    </div>
  )
}

export default HomeMainbar
