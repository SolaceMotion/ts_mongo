import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/api', postRoutes)

const CONNECTION_STRING = 'mongodb+srv://oliver-sa:4n7xXzjaH1prFDS7@cluster0.yk7og.mongodb.net/moviesDB?retryWrites=true&w=majority'
const PORT = 3001

mongoose
  .connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('listening')))
  .catch(error => console.log(error.message))
