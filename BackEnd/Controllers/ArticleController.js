const Article = require("../Models/Article.js");

exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      tag: req.body.tag,
      imageURL: req.body.imageURL,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });

    if (!newArticle.title || !newArticle.content || !newArticle.author) {
      return res
        .status(400)
        .json({ message: "Title, content, and author are required." });
    }

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Article" });
  }
};
