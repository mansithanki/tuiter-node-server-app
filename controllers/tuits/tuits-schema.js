import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  username: String,
  handle: String,
  time: String,
  dislikes: Number,
  image: String,
  retuits: Number,
  replies: Number,
}, {collection: 'tuits'});
export default schema;

