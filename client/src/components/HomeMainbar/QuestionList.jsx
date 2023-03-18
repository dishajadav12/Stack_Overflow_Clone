import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
   <>
     {
        Array.isArray(questionsList) && questionsList.map((question) => (
            <Questions question={question} key={question._id}/>

         ))
     }
    </>
  )
}

export default QuestionList
