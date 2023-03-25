// import express from 'express'
// import { AskQuestion, voteQuestion } from '../controllers/Questions.js'
// import { getAllquestions, deleteQuestion} from '../controllers/Questions.js'
// import auth from '../middlewares/auth.js';



// const router= express.Router()

// router.post('/Ask',auth, AskQuestion)
// router.get('/get',getAllquestions)
// router.delete('/delete/:id',auth,deleteQuestion)
// router.patch('/vote/:id',auth,voteQuestion)
// export default router

import express from 'express'
import { AskQuestion, voteQuestion } from '../controllers/Questions.js'
import { getAllquestions, deleteQuestion} from '../controllers/Questions.js'



const router= express.Router()

router.post('/Ask', AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id',deleteQuestion)
router.patch('/vote/:id',voteQuestion)
export default router
