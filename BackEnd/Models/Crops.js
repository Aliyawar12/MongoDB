const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
      maxlenght: 100,
    },
    Content: { type: String, required: [true, "Please add a Content"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: String,
      enum: ["Crime", "Politics", "Sports", "Entertainment", "Bussiness"],
    },
  },
  {
    timestamps: true,
  }
);

const Articles = mongoose.model("Article", ArticleSchema);

module.exports = Articles;
