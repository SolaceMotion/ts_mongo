import express from 'express'
import PostModel from '../models/postModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find()
    res.json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  const newPost = new PostModel(req.body)

  try {
    await newPost.save()
    res.status(201).json(newPost)
    res.end()
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

export default router
