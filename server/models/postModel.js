import mongoose from 'mongoose'

const PostModel = mongoose.model(
  'Posts',
  mongoose.Schema({
    title: String,
    body: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
)

export default PostModel
