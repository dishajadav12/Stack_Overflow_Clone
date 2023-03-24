import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/'})

export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

export const postQuestion=(questionData) => API.post('/questions/Ask', questionData)

export const getAllQuestions = () => API.get('/questions/get');
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answers/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId} );
export const deleteQuestion= (id) => API.delete(`/questions/delete/${id}`);
export const deleteAnswer= (id,answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`,{answerId, noOfAnswers});