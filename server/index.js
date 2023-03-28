
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';
import answersRoutes from './routes/Answers.js';
import chatBotRoutes from './routes/ChatBot.js';

import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "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"

})

const openai = new OpenAIApi(config)


const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(bodyParser.json());
app.use(cors());



app.get('/',(req,res) => {
        res.send("This is a stack overflow clone API")
 })

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answers', answersRoutes)
app.use('/chat', chatBotRoutes)

 
const PORT = process.env.PORT || 5000

const DATABASE_URL= process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))