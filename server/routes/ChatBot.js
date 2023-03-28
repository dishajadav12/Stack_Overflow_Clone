import express from 'express'
import { chatBot } from '../controllers/chatBot.js'

const router= express.Router()

router.post('/Ask',chatBot)

export default router
