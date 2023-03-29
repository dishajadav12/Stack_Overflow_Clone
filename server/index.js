
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';
import answersRoutes from './routes/Answers.js';
import { Configuration, OpenAIApi } from 'openai';


const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);


const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());



app.get('/',(req,res) => {
        res.send("This is a stack overflow clone API")
 })
 app.use(bodyParser.json());
 app.use(cors());
 app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answers', answersRoutes)
app.post('/chat', async (req, res) => {
  const {prompt} = req.body;

  const completion = await openai.createCompletion({
      model:"text-davinci-003",
      max_tokens: 512,
      temperature: 0,
      prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
})


 
const PORT = process.env.PORT || 5000

const DATABASE_URL= process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))



  


