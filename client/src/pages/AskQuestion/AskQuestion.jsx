import React, {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import {postQuestion} from '../../actions/question'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const AskQuestion = () => {
    const [questionTitle , setQuestionTitle] = useState('')
    const [questionBody , setQuestionBody] = useState('')
    const [questionTags , setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        dispatch(postQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name,userId: User?.result?._id}, navigate)) 
    }

    const handleEnter = (e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")

        }}  

        const checkAuth =() => {
          navigate('/Subscription')
         
        }
        const cancleRef = useRef(null);
        const handleCancle = () =>{
            cancleRef.current.classList.add('hide');
        }
  
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <div className='subscription-container'>
                <div className='sub-message-container' ref={cancleRef}>Upgrade now to post more than one question a day! Click here to subscribe.
                 <button onClick={checkAuth} className='subscription-btn'>Subscribe</button>
               <FontAwesomeIcon icon={faXmark} onClick={handleCancle} className='cancel-btn'></FontAwesomeIcon></div>

            </div>
            <h2>Ask a public Question</h2>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person.</p>
                        <input type="text" id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g Is there a function for finding the index of an element in a vector? ' />
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question.</p>
                        <textarea id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="100" rows="10" onKeyPress={handleEnter} ></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                        <input type="text" id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} placeholder='e.g (xml,typscript,wordpress)' />
                    </label>
                </div>
                <input type="submit" value='Review your question' className='review-btn'/>

            </form>
        </div>

    </div>
  )
}  
export default AskQuestion