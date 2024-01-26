import { Router } from 'express'

// import * as db from '../db/fruits.ts'

const router = Router()

router.get('/', (req, res) => {
  res.send('Welcome to the home page')
})

router.get('/about', (req, res) => {
  res.send('This is the about page')
})

router.get('/shop', (req, res) => {
  res.send('This is the shop page')
})

router.get('/contact', (req, res) => {
  res.send('This is the contact page')
})

export default router
