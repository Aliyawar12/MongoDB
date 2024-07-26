const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoute");
const userRoutes = require("./Routes/userRoute");
const ArticleRoutes = require("./Routes/ArticleRoute");
const app = express();

const PORT = process.env.PORT || //Mention Port Here;

connectDB();

app.get("/", (req, res) => {
  res.send("Home Page");
});

connectDB();
app.listen(PORT, () => {
  console.log(`Run Server on ${PORT}`);
});

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/", userRoutes);
app.use("/", ArticleRoutes);
app.use("/", userRoutes);
