import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import { Configuration, OpenAIApi } from 'openai';


const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);

const router = express.Router()
router.use(bodyParser.json());
router.use(cors());

router.post('/Ask', async (req, res) => {
    const {prompt} = req.body;

    const completion = await openai.createCompletion({
        model:"text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
})
export default router
