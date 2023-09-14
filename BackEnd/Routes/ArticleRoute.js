const express = require("express");
const router = express.Router();
const ArticleController = require("../Controllers/ArticleController");

router.post("/article", ArticleController.createArticle);

module.exports = router;
