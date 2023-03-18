import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ArrowUp from '../../assets/caret-up-solid.svg'
import ArrowDown from '../../assets/caret-down-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
const QuestionsDetails = () => {

    const {id}=useParams()

    const questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    
  return (
    <div className='question-details-page'>
        {
            questionsList.data === null ? 
            <h1>Loading...</h1>:
            <>
            {
                questionsList.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                      <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={ArrowUp} alt="caret-up arrow" className='votes-icon' />
                                    <p>{question.upVotes - question.downVotes}</p>
                                    <img src={ArrowDown} alt="caret-down arrow" className='votes-icon' />

                                </div>
                                <div style={{width:"100%"}}>
                                  <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                      {
                                        question.questionTags.map((tag)=>(
                                          <p key={tag}>{tag}</p>
                                        ))
                                      }
                                    </div>
                                    <div className='question-action-user'>
                                          <div>
                                            <button type='button'> Share</button>
                                            <button type='button'>Delete</button>
                                          </div>
                                          <div>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={`/user/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                             <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                             <div >
                                                  {question.userPosted}
                                             </div>
                                              </Link>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                          question.noOfAnswers !== 0 && (
                            <section>
                              <h3>{question.noOfAnswers} answers</h3>
                              <DisplayAnswer key={question._id} question={question}/>
                            </section>
                          )
                        }
                        <section className='post-ans-containers'>
                          <h3>Your Answer</h3>
                            <form>
                              <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                            <input type="submit" className='post-ans-btn' value='Post your Answer' />
                            </form>
                            <p>
                              Browse other question tagged 
                              {
                                question.questionTags.map((tag) =>(
                                  <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                ))
                              }
                               or
                              {
                                <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}> ask your own question.</Link>
                              }
                            </p>
                        </section>


                    </div>
                ))
            }
            </>
        }
        
    </div>
  )
}

export default QuestionsDetails