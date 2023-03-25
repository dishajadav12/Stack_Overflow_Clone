

// import express from "express";
// import { deleteAnswer, postAnswer} from '../controllers/Answers.js'
// import auth from '../middlewares/auth.js';
// const router = express.Router();

// router.patch('/post/:id',auth, postAnswer)
// router.patch('/delete/:id',auth, deleteAnswer)


// export default router



import express from "express";
import { deleteAnswer, postAnswer} from '../controllers/Answers.js'
const router = express.Router();

router.patch('/post/:id',postAnswer)
router.patch('/delete/:id',deleteAnswer)


export default router
