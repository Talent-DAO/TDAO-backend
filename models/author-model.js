const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// import Article from "../models/article-model";
const File = new Schema({
  filename: { type: String, required: false },
  data: { type: String, required: false }
})

const Author = new Schema(
  {
    username: { type: String, required: true },
    bio: { type: String, required: true },
    authorImage: { type: File, required: false },
    coverImage: { type: File, required: false },
    walletId: { type: String, required: true },
    aboutme: { type: String, required: true },
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false },
    readers: { type: String, required: false },
    times_cited: { type: Number, required: true },
    popularCategories: { type: Array, required: false },
    //articles: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", Author);
