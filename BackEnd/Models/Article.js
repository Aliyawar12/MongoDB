const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
      maxlength: 100,
    },
    content: { type: String, required: [true, "Please add Content"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    tags: {
      type: String,
      enum: ["Crime", "Politics", "Sports", "Entertainment", "Business"],
    },
    imageURL: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
